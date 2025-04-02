import React from 'react';
import './assets/fonts/IBMPlexSans-Regular.woff2';
import './assets/fonts/InterTight-Regular.woff2';
import styles from './styles/app.module.scss';
import './styles/styles.scss';
import { GlobalContext } from './ts/globalProvider';
import ThemeChanger from './components/ThemeChanger';
import ProdutoComponent from './components/Produto';
import useFetch from './hooks/useFetch';
import { Produto } from './models/produtos';

function App() {
  const context = React.useContext(GlobalContext);

  const { request, data, error, loading } = useFetch<Produto[]>();

  React.useEffect(() => {
    if (data) context?.updateProdutos(data);
  }, [data]);

  const handleSearchClick = () => {
    request('https://ranekapi.origamid.dev/json/api/produto/');
  };

  if (error) return <p>Erro.</p>;

  return (
    <main className={`${styles.main} ${context?.tema === 'dark' ? styles.dark : styles.light}`}>
      <ThemeChanger />

      <p>Tema atual: {context?.tema}</p>

      <div className={styles.buttons}>
        <button onClick={handleSearchClick}>Buscar produtos</button>
        <button onClick={context?.clearProdutos}>Limpar produtos</button>
      </div>

      {loading && <p>Carregando...</p>}
      {context?.produtos && (
        <section className={styles.produtos}>
          {context?.produtos.map(produto => <ProdutoComponent key={produto.id} {...produto} />)}
        </section>
      )}
    </main>
  );
}

export default App;
