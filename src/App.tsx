import { CSSProperties, useState } from 'react';
import Header from './components/Header';
import ProdutcComp from './components/ProdutcComp';
import Ex1 from './exercicios/Ex1';
import { clientes, produtos, produtosComponentes } from './constantes';
import Produto from './exercicios/arrays';

function App() {
  const [count, setCount] = useState(0);

  const clientDiv: CSSProperties = {
    display: 'flex',
    margin: ' 2rem auto',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '2rem',
  };

  const { pathname } = window.location;

  if (pathname === '/exercicios') {
    return (
      <>
        <Header />
        <main>
          <section>
            <h2>Cliente - Ex1</h2>

            <div style={clientDiv}>
              {clientes.map((cliente, index) => (
                <Ex1 {...cliente} key={index} />
              ))}
            </div>
          </section>
          <section>
            <h2>Produtos - Ex2 - Arrays</h2>

            <div style={clientDiv}>
              {produtos
                .filter(({ preco }) => Number(preco.replace('R$ ', '')) > 1500)
                .map((produto, index) => (
                  <Produto {...produto} key={`${index}-${produto.id}`} />
                ))}
            </div>
          </section>
        </main>
      </>
    );
  }

  if (pathname === '/produtos') {
    return (
      <>
        <Header />
        <main>
          {produtosComponentes.map((pp, index) => (
            <ProdutcComp key={`${index}-${pp.nome}`} {...pp} />
          ))}
        </main>
      </>
    );
  }

  return (
    <>
      <Header />
      <main>
        <h1>content</h1>
        <button onClick={() => setCount(count + 1)}>Count é: {count}</button>

        <hr />
      </main>
    </>
  );
}

export default App;
