
import { Container, Form , Col, Button } from 'react-bootstrap';
import './contato.css';


export default function Contato (){

    async function Cadastro(event){
        event.preventDefault()

        const answer = await fetch("http://localhost:3333/contato",{
        method: "POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify({  "nome":event.target.nome_cliente.value,
                                "email":event.target.email.value,
                                "mensagem":event.target.mensagem.value})})
        const data = await answer.json()
        console.log(data)
    }


    return(
        <Container>
            <Form onSubmit={Cadastro}>  
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
                    <Form.Control as="textarea" rows={3} name="mensagem" />
                </Form.Group>
                <Button variant="dark" type="submit">Concluir</Button>
            </Form>
        </Container>

    );
}