import styles from '../../sass/components/header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li>
            <a href='/inicio'>Início</a>
          </li>
          <li>
            <a href='/exercicios'>Exercícios</a>
          </li>
          <li>
            <a href='/produtos'>Produtos</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
