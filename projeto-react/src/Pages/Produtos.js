import { useState, useEffect } from 'react';

import { Container, Row } from 'react-bootstrap';
import Produto from '../Components/Produto';

function Produtos() {

    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const answer  = await fetch("http://localhost/remoda/ReModa/projeto-react/src/php/api/produtos.php")
            const data = await answer.json()
            setProdutos(data);
        }
        fetchData();
    }, []);

    return (
        <Container>
            <Row>
               {produtos && produtos.map(item => <Produto key={item.id} imagem={item.imagem} nome={item.nome}  precoPromocional={item.precoPromocional}  categoria={item.categoria} />)}
            </Row>
        </Container>
    );
};

export default Produtos;