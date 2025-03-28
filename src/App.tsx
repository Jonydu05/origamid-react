import { useEffect, useState } from 'react';
import './assets/fonts/IBMPlexSans-Regular.woff2';
import './assets/fonts/InterTight-Regular.woff2';
import { Produto } from './models/produtos';
import ProdutoComponent from './Produto';
import styles from './styles/app.module.scss';
import './styles/styles.scss';

function App() {
  const [produtos, setProdutos] = useState<Produto[]>(() => {
    return JSON.parse(localStorage.getItem('produtos') || '') || [];
  });
  const [loading, setLoading] = useState(false);

  const handleClick = (type: string) => {
    if (produtos.some(prod => prod.id === type)) return;

    setLoading(true);
    getData(type).then(res => {
      setProdutos(prev => [...prev, res]);
      setLoading(false);
    });
  };

  const getData = async (url: string): Promise<Produto> => {
    const res = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${url}`);
    return res.json();
  };

  useEffect(() => {
    localStorage.setItem('produtos', JSON.stringify(produtos));
  }, [produtos]);

  return (
    <main className={styles.main}>
      <section aria-label='Botões'>
        <button onClick={() => handleClick('smartphone')}>Smartphone</button>
        <button onClick={() => handleClick('tablet')}>Tablet</button>
        <button onClick={() => handleClick('notebook')}>Notebook</button>
      </section>

      {loading && <div>Carregando...</div>}
      <section className={styles.produtos} aria-label='Produtos'>
        {produtos.map(produto => (
          <ProdutoComponent key={produto.id} data={{ ...produto }} setProdutos={setProdutos} />
        ))}
      </section>
    </main>
  );
}

export default App;
