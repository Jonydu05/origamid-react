import React from 'react';
import { Produto } from '../models/produtos';
import useLocalStorage from '../hooks/useLocalStorage';
import useFetch from '../hooks/useFetch';

interface IGlobalContext {
  tema: string;
  saveTema: (tema: string) => void;
  produtos: Produto[];
  clearProdutos: () => void;
  removerProduto: (id: string) => void;
  updateProdutos: (produtos: Produto[]) => void;
  isLoading: boolean;
  updateLoading: (load: boolean) => void;
}

export const GlobalContext = React.createContext<IGlobalContext | null>(null);

export const GlobalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [tema, setTema] = useLocalStorage('tema', 'light');
  const [produtos, setProdutos] = React.useState<Produto[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const { request, data } = useFetch<Produto[]>();

  const saveTema = (newTema: string) => setTema(newTema);

  const clearProdutos = () => setProdutos([]);
  const updateLoading = (load: boolean) => setIsLoading(load);

  const removerProduto = (id: string): void => {
    setProdutos(prev => prev.filter(prod => prod.id !== id));
  };

  const updateProdutos = (value: Produto[]) => {
    setProdutos(value);
  }

  React.useEffect(() => {
    request('https://ranekapi.origamid.dev/json/api/produto/');
  }, []);

  React.useEffect(() => {
    if (data) setProdutos(data);
  }, [data]);

  return (
    <GlobalContext.Provider
      value={{ tema, saveTema, produtos, clearProdutos, isLoading, updateLoading, removerProduto, updateProdutos }}>
      {children}
    </GlobalContext.Provider>
  );
};
