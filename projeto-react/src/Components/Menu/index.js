import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';
import './Menu.css';


function BaseMenu(props) {
    const { location }  = props
    return (

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand  as={Link} to="/" href="/Home">
                RêModa
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="item-menu" />
            <Navbar.Collapse id="item-menu">
                <Nav activeKey={location.pathname} className="mr-auto">
                    <Nav.Link as={Link} to="/Produtos/Produtos" href="/Produtos/Produtos">Produtos</Nav.Link>
                    <Nav.Link as={Link} to="/Pedidos" href="/Pedidos">Pedidos</Nav.Link>
                    <Nav.Link as={Link} to="/Contato" href="/Contato">Contato</Nav.Link>
                    <NavDropdown title="Nossas Lojas" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Rio de Janeiro</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">São Paulo</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Salvador</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item as={Link} to="/TodasLojas" href="/TodasLojas">Todas</NavDropdown.Item>
                    </NavDropdown>
                </Nav>  
                <Nav>
                    <Nav.Link disabled as={Link} to="/Entrar" href="/Entrar">Entre</Nav.Link>
                    <Nav.Link disabled as={Link} to="/Cadastro" href="/Cadastro">Cadastre-se</Nav.Link>
                </Nav>      
            </Navbar.Collapse>
        </Navbar>
    );
};

const Menu = withRouter(BaseMenu);

export default Menu;