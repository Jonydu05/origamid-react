import { useEffect, useState } from 'react';
import './assets/fonts/IBMPlexSans-Regular.woff2';
import './assets/fonts/InterTight-Regular.woff2';
import { Produto } from './models/produtos';
import ProdutoComponent from './Produto';
import styles from './styles/app.module.scss';
import './styles/styles.scss';

function App() {
  const [produto, setProduto] = useState<Produto | null>(() => {
    return JSON.parse(localStorage.getItem('produto') || '{}') || null;
  });
  const [loading, setLoading] = useState(false);

  const handleClick = (type: string) => {
    setLoading(true);

    getData(type).then(res => {
      setProduto(res);
      setLoading(false);
    });
  };

  const getData = async (url: string): Promise<Produto> => {
    const res = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${url}`);
    return res.json();
  };

  useEffect(() => {
    localStorage.setItem('produto', JSON.stringify(produto));
  }, [produto]);

  return (
    <main className={styles.main}>
      <h2>Preferência:</h2>
      <section aria-label='Botões'>
        <button onClick={() => handleClick('smartphone')}>Smartphone</button>
        <button onClick={() => handleClick('tablet')}>Tablet</button>
        <button onClick={() => handleClick('notebook')}>Notebook</button>
      </section>

      {loading && <div>Carregando...</div>}
      <section className={styles.produtos} aria-label='Produtos'>
        {produto && <ProdutoComponent key={produto.id} {...produto} />}
      </section>
    </main>
  );
}

export default App;
