import { Produto } from './models/produtos';
import styles from './styles/produto.module.scss';

function ProdutoComponent(data: Produto) {
  const { nome, preco, vendido, fotos, descricao } = data;

  return (
    <article aria-label={nome} className={styles.produto}>
      <header>
        <h4>{nome}</h4>
        <h5>
          R$ {preco} - {vendido == 'false' ? 'Não vendido' : 'Vendido'}
        </h5>
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
