import React from 'react';
import './assets/fonts/IBMPlexSans-Regular.woff2';
import './assets/fonts/InterTight-Regular.woff2';
import styles from './styles/app.module.scss';
import './styles/styles.scss';
import { GlobalContext } from './globalProvider';
import ThemeChanger from './ThemeChanger';
import ProdutoComponent from './Produto';

function App() {
  const context = React.useContext(GlobalContext);

  return (
    <main className={`${styles.main} ${context?.tema === 'dark' ? styles.dark : styles.light}`}>
      <ThemeChanger />

      <p>Tema atual: {context?.tema}</p>

      <div className={styles.buttons}>
        <button onClick={context?.buscarProdutos}>Buscar produtos</button>
        <button onClick={context?.clearProdutos}>Limpar produtos</button>
      </div>

      <section className={styles.produtos}>
        {context?.produtos.map(produto => <ProdutoComponent key={produto.id} {...produto} />)}
      </section>
    </main>
  );
}

export default App;
