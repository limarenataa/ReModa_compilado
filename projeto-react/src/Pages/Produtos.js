import { useState, useEffect } from 'react';

import { Container, Row } from 'react-bootstrap';
import Produto from '../Components/Produto';

function Produtos() {

    const [produtos, setProdutos] = useState([]);

    useEffect(async () => {
            const answer  = await fetch("http://localhost/remoda/ReModa/projeto-react/src/php/api/produtos.php")
            const data = await answer.json()
            setProdutos(data);
    }, []);

    return (
        <Container>
            <Row>
                { produtos && produtos.map(item => <Produto imagem={item.imagem} descricao={item.descricao} preco_final={item.preco_final} categoria={item.categoria} /> )}
            </Row>
        </Container>
    );
};

export default Produtos;