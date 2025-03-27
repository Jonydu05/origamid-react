import { Produto } from './models/produtos';
import styles from './produto.module.scss';

function ProdutoComponent({ descricao, fotos, nome, preco, vendido }: Produto) {
  return (
    <article aria-label={nome} className={styles.produto}>
      <header>
        <h4>{nome}</h4>
        <h5>{preco}</h5>
        <span className={vendido ? 'vendido' : ''}>{vendido ? 'sim' : 'não'}</span>
      </header>
      <figure>
        {fotos.map(foto => (
          <>
            <img src={foto.src} alt={foto.titulo} key={foto.src} />
            <figcaption>{foto.titulo}</figcaption>
          </>
        ))}
      </figure>
      <p>{descricao}</p>
    </article>
  );
}

export default ProdutoComponent;
