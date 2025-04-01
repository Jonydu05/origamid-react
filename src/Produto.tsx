import { X } from '@phosphor-icons/react';
import React from 'react';
import { Produto } from './models/produtos';
import styles from './styles/produto.module.scss';
import { GlobalContext } from './globalProvider';

function ProdutoComponent(data: Produto) {
  const context = React.useContext(GlobalContext);

  const { nome, preco, vendido, fotos, descricao } = data;

  return (
    <article aria-label={nome} className={styles.produto}>
      <header>
        <h4>{nome}</h4>
        <h5>
          R$ {preco} - {vendido == 'false' ? 'Não vendido' : 'Vendido'}
        </h5>
        <X
          size={16}
          style={{ marginLeft: 'auto', cursor: 'pointer' }}
          onClick={() => context?.removerProduto(data.id)}
        />
      </header>
      <div>
        {fotos.map(foto => (
          <figure key={foto.src}>
            <img src={foto.src} alt={foto.titulo} />
            <figcaption>{foto.titulo}</figcaption>
          </figure>
        ))}
      </div>
      <p>{descricao}</p>
    </article>
  );
}

export default ProdutoComponent;
