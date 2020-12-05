import { useState, useEffect } from 'react';

import { Container, Row } from 'react-bootstrap';
import Produto from '../Components/Produto';

function Produtos() {

    const [produtos, setProdutos] = useState([]);

    // useEffect(async () => {
    //         const answer  = await fetch("http://localhost/remoda/ReModa/projeto-react/src/php/api/produtos.php")
    //         const data = await answer.json()
    //         setProdutos(data);
    // }, []);
    
    useEffect(() => {
        async function dadosProdutos(){
            const answer  = await fetch("http://localhost/remoda/ReModa/projeto-react/src/php/api/produtos.php")
            const data = await answer.json()
            setProdutos(data);
    }
       dadosProdutos();
       
    }, []);

    return (
        <Container>
            {/* <Categorias /> */}
            <Row>
                { produtos && produtos.map(item => <Produto key={item.idproduto} imagem={item.imagem} 
                descricao_produto={ item.descricao_produto  } preco_final={item.preco_final} categoria={item.categoria} /> )}
            </Row>
        </Container>
    );
};

export default Produtos;