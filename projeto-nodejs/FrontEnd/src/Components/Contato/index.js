
import { Container, Form , Col, Button } from 'react-bootstrap';
import './contato.css';


export default function Contato (){

    return(
        <Container>
            <Form>  
                <h3 className="titulo-contato">Contato</h3>
                <Form.Row>
                    <Form.Group as={Col} controlId="nome_cliente">
                        <Form.Label>Nome: </Form.Label>
                        <Form.Control placeholder="Nome completo"  name="nome_cliente" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="email" >
                        <Form.Label>Email: </Form.Label>
                        <Form.Control  placeholder="exemplo@gmail.com" name="email" />
                    </Form.Group>
                </Form.Row>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Mensagem: </Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Button variant="dark" type="submit">Concluir</Button>
            </Form>
        </Container>

    );
}