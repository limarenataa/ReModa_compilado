import { useState } from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';

function Pedidos() {

    const [form, setForm] = useState({
        nome: "",
        email: "",
        telefone: "",
        endereco: "",
        complemento: "",
        produto: "",
        quantidade: "",
        preco_final: ""
    });

    const controleMudanca = (evento) => {
        console.log(evento.target.value)
        setForm({
            ...form,
            [evento.target.id]: evento.target.value
        })
    }

    const controleEnvio = async (evento) => {
        evento.preventDefault(); //Executa o submit mas a tela não será renderizada novamente
        const preco_final = parseFloat(form.valor) * parseFloat(form.quantidade); //Calculando o preço final a partir da quantidade informada no formulário.
        document.getElementById("preco_final").value = `R$ ${preco_final}`;

        setForm({
            ...form,
            preco_final: preco_final
        })

        const json = JSON.stringify(form);
        const opcoes = {
            crossDomain: true,
            mode: 'cors',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        }

        const resposta = await fetch("http://localhost/remoda/ReModa/projeto-react/src/php/api/pedidos.php", opcoes);
        const dados = await resposta.json()
        console.log(dados);
    }

    return (
      
                <Form onSubmit={controleEnvio}>
                    
                    <h4>Faça seu pedido</h4>

                        <Form.Row>
                            <Form.Group as={Col} controlId="nome">
                                <Form.Label>Nome: </Form.Label>
                                <Form.Control onChange={controleMudanca}placeholder="Nome completo" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control onChange={controleMudanca} placeholder="exemplo@gmail.com" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="telefone">
                                <Form.Label>Telefone: </Form.Label>
                                <Form.Control onChange={controleMudanca} placeholder="(00)00000-0000" />
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="endereco">
                                <Form.Label>Endereço: </Form.Label>
                                <Form.Control onChange={controleMudanca} />
                            </Form.Group>

                            <Form.Group  as={Col} controlId="complemento">
                                <Form.Label>Complemento: </Form.Label>
                                <Form.Control onChange={controleMudanca} />
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="produto">
                                <Form.Label>Produto: </Form.Label>
                                <Form.Control onChange={controleMudanca} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="quantidade">
                                <Form.Label>Quantidade: </Form.Label>
                                <Form.Control onChange={controleMudanca} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="preco_final">
                                <Form.Label>Preço Final: </Form.Label>
                                <Form.Control disabled onChange={controleMudanca}/>
                            </Form.Group>
                        </Form.Row>

                        <Form.Group id="presente">
                            <Form.Check type="checkbox" label="Embalar para presente" />
                        </Form.Group>

                        <Button variant="dark" type="submit">Concluir</Button>
                </Form>
    );
};

export default Pedidos;