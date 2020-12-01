import { Switch, Route } from 'react-router-dom';

import Home from './Pages/Home';
import  Produtos  from './Pages/Produtos';
import  Pedidos  from './Pages/Pedidos';

function Rotas() {
    return (
        <Switch>
            <Route exact path="Home" component={Home} />
            <Route exact path="/Produtos" component={Produtos} />
            <Route exact path="/Pedidos" component={Pedidos} />
        </Switch>
    );
}

export default Rotas;
