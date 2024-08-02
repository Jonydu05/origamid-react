import { CSSProperties } from 'react';
import type { cliente } from '../constantes';

export default function Cliente(cliente: cliente) {
  const cardStyles: CSSProperties = {
    display: 'flex',
    borderRadius: '6px',
    boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: '8px',
    backgroundColor: cliente.ativa
      ? 'color-mix(in srgb, green 20%, transparent)'
      : 'color-mix(in srgb, red 20%, transparent)',
    border: '1px solid',
    borderColor: cliente.ativa ? 'green' : 'red',
    minWidth: '300px',
  };

  const infoStyles: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '1rem',
    flexWrap: 'wrap',
  };

  const ulStyle: CSSProperties = {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  };

  const liStyle: CSSProperties = {
    display: 'flex',
    padding: '.25rem',
    gap: '.5rem',
    alignItems: 'center',
  };

  const getTotalCompras = (): number => {
    let total = 0;
    cliente.compras.map(compra => {
      const numberpreco = Number(compra.preco.replace('R$ ', ''));
      total += numberpreco;
    });
    return total;
  };

  const total = getTotalCompras();

  return (
    <div style={cardStyles}>
      <div style={infoStyles}>
        <h4>Nome: {cliente.cliente}</h4>
        <span>Idade: {cliente.idade}</span>
        <span>Situação: {cliente.ativa ? 'Ativo' : 'Inativo'}</span>
      </div>

      <ul style={ulStyle}>
        {cliente.compras.map((compra, index) => (
          <li key={index} style={liStyle}>
            <span>Nome: {compra.nome}</span>
            <span>Preço: {compra.preco}</span>
          </li>
        ))}
      </ul>

      <h5>Total compras: R$ {total}</h5>

      {total > 10000 ? <p>Gasto é maior que R$ 10.000,00 !</p> : null}
    </div>
  );
}
