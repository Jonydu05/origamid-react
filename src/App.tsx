import { useState } from 'react';
import { Produto } from './models/produtos';

function App() {
  const [data, setData] = useState<Produto | null>(null);
  const [loading, setLoading] = useState(false);

  const handleClick = (type: string) => {
    setLoading(true);

    getData(type).then(res => {
      setData(new Produto(res));
      setLoading(false);
    });
  };

  const getData = async (url: string): Promise<Produto> => {
    const res = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${url}`);
    return res.json();
  };

  return (
    <div>
      <button onClick={() => handleClick('smartphone')}>Smartphone</button>
      <button onClick={() => handleClick('tablet')}>Tablet</button>
      <button onClick={() => handleClick('notebook')}>Notebook</button>

      {loading && <div>Carregando...</div>}
    </div>
  );
}

export default App;
