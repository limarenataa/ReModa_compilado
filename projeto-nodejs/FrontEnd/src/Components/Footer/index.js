import { Container } from 'react-bootstrap';
import './footer.css';

export default function Footer (){
    return (
        <Container fluid className="rodape bg-dark">
            <div className="info-footer">
                <h4>Formas de pagamento</h4>
                <img className="imagem-footer" src="https://i.imgur.com/VXNX4zf.png" alt="Formas de pagamento" />
                <p>ReModa &#10048; &copy;</p>
            </div>
        </ Container>
    );
}