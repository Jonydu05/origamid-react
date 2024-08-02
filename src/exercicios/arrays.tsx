import type { produto } from '../constantes';

export default function Produto(produto: produto) {
  return (
    <div>
      <h4>{produto.nome}</h4>
      <p>Preço: {produto.preco}</p>
      <ul>
        {produto.cores.map(cor => (
          <li key={cor} style={{ background: cor, color: 'white' }}>
            {cor}
          </li>
        ))}
      </ul>
    </div>
  );
}
