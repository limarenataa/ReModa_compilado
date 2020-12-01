import { Container, Row } from 'react-bootstrap';
import Produto from '../Components/Produto';

function Produtos() {
    return (
        <Container>
            <Row>
                <Produto imagem="blusa1.png" nome="Blusa de manga floral" precoPromocional="89,90" categoria="blusas" />
            </Row>
        </Container>
    )
};

export default Produtos;