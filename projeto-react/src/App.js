import Menu from './Components/Menu';
import Rotas from './rotas';

import { BrowserRouter } from 'react-router-dom';



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
      </div>
    </BrowserRouter>
  );
}

export default App;
