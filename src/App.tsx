import './assets/fonts/IBMPlexSans-Regular.woff2';
import './assets/fonts/InterTight-Regular.woff2';
import { Produto } from './models/produtos';
import ProdutoComponent from './Produto';
import styles from './styles/app.module.scss';
import './styles/styles.scss';
import ThemeContext from './UserContext';

function App() {
  return (
    <ThemeContext.Provider value={{ nome: 'Joao' }}>
      <main className={styles.main}>
        <ProdutoComponent  />
      </main>
    </ThemeContext.Provider>
  );
}

export default App;
