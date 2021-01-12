import { ListGroup } from 'react-bootstrap';
import './lojas.css';


export default function Lojas(){
    return (
        <ListGroup className="lojas" >
            <h3 className="titulo-lojas">Nossas Lojas:</h3>
        <ListGroup.Item>
            <h4>Rio de Janeiro</h4>
            <p>Avenida das Américas 000</p>
            <p>Barra da Tijuca</p>
            <p>(21)0000-0000</p>
        </ListGroup.Item>
        <ListGroup.Item>
            <h4>São Paulo</h4>
            <p>Avenida São Paulo 000</p>
            <p>Jardins</p>
            <p>(11)0000-0000</p>
        </ListGroup.Item>
        <ListGroup.Item>
            <h4>Salvador</h4>
            <p>Avenida Salvador 000</p>
            <p>Alphaville</p>
            <p>(71)0000-0000</p>
        </ListGroup.Item>
    </ListGroup>
    )
} 