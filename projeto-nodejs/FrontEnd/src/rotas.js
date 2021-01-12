import { Switch, Route } from 'react-router-dom';

import Home from './Pages/Home';
import  Produtos  from './Pages/Produtos';
import  Pedidos  from './Pages/Pedidos';
import  TodasLojas from './Pages/TodasLojas';
import  Contato from './Pages/Contato';

function Rotas() {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Produtos" component={Produtos} />
            <Route path="/Pedidos" component={Pedidos} />
            <Route path="/Contato" component={Contato} />
            <Route path="/TodasLojas" component={TodasLojas} />
        </Switch>
    );
}

export default Rotas;
