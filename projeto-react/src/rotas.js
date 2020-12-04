import { Switch, Route } from 'react-router-dom';

import Home from './Pages/Home';
import  Produtos  from './Pages/Produtos';
import  Pedidos  from './Pages/Pedidos';
import  TodasLojas from './Pages/TodasLojas';

function Rotas() {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Produtos" component={Produtos} />
            <Route exact path="/Pedidos" component={Pedidos} />
            <Route exact path="/TodasLojas" component={TodasLojas} />
        </Switch>
    );
}

export default Rotas;
