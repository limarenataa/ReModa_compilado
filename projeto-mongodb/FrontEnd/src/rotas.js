import { Switch, Route } from 'react-router-dom';
import {lazy, Suspense} from 'react';


// import Home from './Pages/Home';
// import  Produtos  from './Pages/Produtos';
// import  Pedidos  from './Pages/Pedidos';
// import  TodasLojas from './Pages/TodasLojas';
// import  Contato from './Pages/Contato';

//Aplicando Lazy Loading nas rotas
const Home = lazy(() => import('./Pages/Home'));
const Produtos = lazy(() => import('./Pages/Produtos'));
const Pedidos = lazy(() => import('./Pages/Pedidos'));
const TodasLojas = lazy(() => import('./Pages/TodasLojas'));
const Contato = lazy(() => import('./Pages/Contato'));

function Rotas() {
    return (
        <Suspense fallback={
            <div class="spinner-border"  role="status">
              <span class="sr-only">Loading...</span>
            </div>
          }>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/Produtos" component={Produtos} />
                <Route path="/Pedidos" component={Pedidos} />
                <Route path="/Contato" component={Contato} />
                <Route path="/TodasLojas" component={TodasLojas} />
            </Switch>
        </Suspense>
    );
}

export default Rotas;
