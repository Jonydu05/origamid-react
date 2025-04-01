import React from 'react';
import { Produto } from '../models/produtos';

type ITema = 'light' | 'dark';

interface IGlobalContext {
  tema: ITema;
  saveTema: (tema: ITema) => void;
  produtos: Produto[];
  clearProdutos: () => void;
  removerProduto: (id: string) => void;
  isLoading: boolean;
  updateLoading: (load: boolean) => void;
  buscarProdutos: () => void;
}

export const GlobalContext = React.createContext<IGlobalContext | null>(null);

export const GlobalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [tema, setTema] = React.useState<ITema>('light');
  const [produtos, setProdutos] = React.useState<Produto[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const buscarProdutos = () => {
    setIsLoading(true);
    getProdutos().then(data => {
      setProdutos(data);
      setIsLoading(false);
    });
  };

  const getProdutos = async (): Promise<Produto[]> => {
    const res = await fetch('https://ranekapi.origamid.dev/json/api/produto/');
    return res.json();
  };

  React.useEffect(() => buscarProdutos(), []);

  const saveTema = (newTema: ITema) => setTema(newTema);

  const clearProdutos = () => setProdutos([]);
  const updateLoading = (load: boolean) => setIsLoading(load);

  const removerProduto = (id: string): void => {
    setProdutos(prev => prev.filter(prod => prod.id !== id));
  };

  return (
    <GlobalContext.Provider
      value={{ tema, saveTema, produtos, clearProdutos, isLoading, updateLoading, removerProduto, buscarProdutos }}>
      {children}
    </GlobalContext.Provider>
  );
};
