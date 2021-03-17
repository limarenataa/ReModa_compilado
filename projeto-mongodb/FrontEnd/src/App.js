import Menu from './Components/Menu';
import Rotas from './rotas';
import { BrowserRouter } from 'react-router-dom';
import {lazy, Suspense} from 'react';

import './app.css';

//Aplicação do Lazy Loading.
const Rodape = lazy(() => import('./CodeSplitting/Rodape'));

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <Menu />
        </header>
        <main>
          <Rotas />
        </main>
        <footer>
        <Suspense fallback={ <h3 className="footer" style={{textAlign:'center', marginTop:"400px"}}>Carregando Footer</h3>}>
          <Rodape />
        </Suspense>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
