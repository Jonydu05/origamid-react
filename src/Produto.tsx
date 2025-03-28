import { X } from '@phosphor-icons/react';
import { Dispatch } from 'react';
import { Produto } from './models/produtos';
import styles from './styles/produto.module.scss';
import { SetStateAction } from 'react';

type ProdutosComponentsProps = {
  data: Produto;
  setProdutos: Dispatch<SetStateAction<Produto[]>>;
};

function ProdutoComponent({ data, setProdutos }: ProdutosComponentsProps) {
  const { nome, preco, vendido, fotos, descricao, id } = data;

  const handleClick = () => {
    setProdutos(prev => prev.filter(produto => produto.id !== id));
  };

  return (
    <article aria-label={nome} className={styles.produto}>
      <header>
        <h4>{nome}</h4>
        <h5>
          R$ {preco} - {vendido == 'false' ? 'Não vendido' : 'Vendido'}
        </h5>
        <X onClick={handleClick} style={{ marginLeft: 'auto', cursor: 'pointer' }} />
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
