import { pdCmp } from '../constantes';

function ProdutcComp(produto: pdCmp) {
  return (
    <div>
      <p>{produto.nome}</p>
      <ul>
        {produto.propriedades.map((prop, index) => (
          <li key={`${index}-${prop}`}>{prop}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProdutcComp;
