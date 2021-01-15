// import { useEffect, useState } from 'react'; 
import React from 'react'
import { Form, Button, Col, Container } from 'react-bootstrap';
import './formulario.css';


const Formulario = () => {

    const[formulario, setFormulario] = React.useState({
        nomecliente:"",
        email:"",
        telefone:"",
        idcliente:"",
        endereco:"",
        complemento:"",
        descricao_produto:"",
        preco: "",
        quantidade:"",
        preco_final:""

    })

    const [response, setResponse] = React.useState(null)
    
    function handleChange({target}){  //O target faz ligação com o value do input.
        const {id, value} = target
        //Substitui o primeiro parâmentro pelo segundo. 
        setFormulario({ ...formulario, [id]:value})
        console.log({[id]:value})

    }

    //Enviando nossos dados para a API
    function handleSubmit(event){
        event.preventDefault()
        fetch("http://localhost:4000/pedidos", {
            method:"POST",
            headers:{
                "Content-Type": "application/json"
            },
            //transforma em json 
            body: JSON.stringify(formulario) 
        }).then((res)=> {
            setResponse(res);
        });
    }


    return (
        <Container className="formulario">
            <Form onSubmit={handleSubmit}>
                
                <h3 className="titulo-form">Faça seu pedido</h3>

              
                    <Form.Row>
                        <Form.Group as={Col} controlId="nomecliente">
                            <Form.Label>Nome: </Form.Label>
                            <Form.Control value={formulario.nomecliente} placeholder="Nome completo"  name="nomecliente"  onChange={handleChange} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="email" >
                            <Form.Label>Email</Form.Label>
                            <Form.Control value={formulario.email} placeholder="exemplo@gmail.com" name="email"  onChange={handleChange} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="telefone" > 
                            <Form.Label>Telefone: </Form.Label>
                            <Form.Control value={formulario.telefone} placeholder="(00)00000-0000" name="telefone"  onChange={handleChange} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="idcliente" > 
                            <Form.Label>Código cliente: </Form.Label>
                            <Form.Control value={formulario.idcliente} placeholder="(00)00000-0000" name="idcliente"  onChange={handleChange} />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="endereco" >
                            <Form.Label>Endereço: </Form.Label>
                            <Form.Control value={formulario.endereco} name="endereco" onChange={handleChange}/>
                        </Form.Group>

                        <Form.Group  as={Col} controlId="complemento"  >
                            <Form.Label>Complemento: </Form.Label>
                            <Form.Control  value={formulario.complemento} name="complemento"  onChange={handleChange}/>
                        </Form.Group>
                    </Form.Row>

                    <Form.Group  controlId="descricao_produto" >
                            <Form.Label>Descrição: </Form.Label>
                            <Form.Control value={formulario.descricao_produto} name="descricao_produto"  onChange={handleChange}/>
                    </Form.Group>

                    <Form.Row>
                        <Form.Group as={Col} controlId="preco">
                            <Form.Label>Preço: </Form.Label>
                            <Form.Control value={formulario.preco} name="preco"  onChange={handleChange}/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="quantidade">
                            <Form.Label>Quantidade: </Form.Label>
                            <Form.Control value={formulario.quantidade} name="quantidade"  onChange={handleChange} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="preco_final">
                            <Form.Label>Preço Final: </Form.Label>
                            <Form.Control value={formulario.preco_final} name="preco_final"  onChange={handleChange}/>
                        </Form.Group>
                    </Form.Row>

                    <Form.Group id="presente">
                        <Form.Check type="checkbox" label="Embalar para presente" />
                    </Form.Group>

                    <Button className="btn-form" variant="dark" type="submit">Concluir</Button>
            </Form>

            {response && response.ok && <p>Dados enviados paras tabelas cliente e pedidos</p>}
        </Container>
    );
};

export default Formulario;