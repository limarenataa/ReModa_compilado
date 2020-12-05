import { useEffect, useState } from 'react'; 
import { Form, Button, Col, Container } from 'react-bootstrap';
import Pedidos from './Pedidos';
import './formulario.css';



export default function Formulario(props) {

    const [ pedidos, setPedidos ] = useState([]) // useState é uma função que retorna 2 valores. Então ele retorna o estado (pedidos) e a função para poder modificar o estado (setPedidos)

    const controleEnvio = async (evento) => {
        evento.preventDefault();
    
        const url = "http://localhost/remoda/ReModa/projeto-react/src/php/api/pedidos.php";
        const dados = new FormData(evento.target);
        const cabecalho = { 
            method: "POST", 
            body: dados, 
            };
        
        const resposta = await fetch(url, cabecalho);
        const resultado = await resposta.json()
        console.log(resultado);

    
    }

    //Exibição da lista do BD 
    useEffect(() => {
        async function pedidosClientes(){
            const url = "http://localhost/remoda/ReModa/projeto-react/src/php/api/joinPedidosClientes.php"
            const resposta = await fetch(url);
            const resultado = await resposta.json();
         
            setPedidos(resultado);
        }

        pedidosClientes();
    }, [pedidos], [])  // o estado de pedidos vai atualizar na lista toda vez que foi modificado.

    return (
        <Container className="formulario">
            <Form  onSubmit={controleEnvio}>
                
                <h3>Faça seu pedido</h3>

                    <Form.Row>
                        <Form.Group as={Col} controlId="nome_cliente">
                            <Form.Label>Nome: </Form.Label>
                            <Form.Control placeholder="Nome completo"  name="nome_cliente" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="email" >
                            <Form.Label>Email</Form.Label>
                            <Form.Control  placeholder="exemplo@gmail.com" name="email" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="telefone" > 
                            <Form.Label>Telefone: </Form.Label>
                            <Form.Control  placeholder="(00)00000-0000" name="telefone" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="endereco" >
                            <Form.Label>Endereço: </Form.Label>
                            <Form.Control name="endereco" />
                        </Form.Group>

                        <Form.Group  as={Col} controlId="complemento"  >
                            <Form.Label>Complemento: </Form.Label>
                            <Form.Control  name="complemento"/>
                        </Form.Group>
                    </Form.Row>

                    <Form.Group  controlId="descricao_produto" >
                            <Form.Label>Descrição: </Form.Label>
                            <Form.Control name="descricao_produto" />
                    </Form.Group>

                    <Form.Row>
                        <Form.Group as={Col} controlId="preco">
                            <Form.Label>Preço: </Form.Label>
                            <Form.Control name="preco"/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="quantidade">
                            <Form.Label>Quantidade: </Form.Label>
                            <Form.Control name="quantidade" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="preco_final">
                            <Form.Label>Preço Final: </Form.Label>
                            <Form.Control name="preco_final"/>
                        </Form.Group>
                    </Form.Row>

                    <Form.Group id="presente">
                        <Form.Check type="checkbox" label="Embalar para presente" />
                    </Form.Group>

                    <Button variant="dark" type="submit">Concluir</Button>
            </Form>
            <div className="row">
                <div className="col-lg-12 col-md-12 mx-auto">
                    <div className="tabela-limitada">
                        <table className="table table-stripe">
                            <tbody>
                                    {pedidos && pedidos.map(pedido => <Pedidos key={pedido.idpedidos} idpedidos={pedido.idpedidos} descricao_produto={pedido.descricao_produto}
                                     preco={pedido.preco} quantidade={pedido.quantidade} preco_final={pedido.preco_final} fk_idcliente={pedido.fk_idcliente} 
                                     idcliente={pedido.idcliente} nome_cliente={pedido.nome_cliente} email={pedido.email} 
                                     telefone={pedido.telefone} endereco={pedido.endereco} complemento={pedido.complemento}/> )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Container>
    );
};