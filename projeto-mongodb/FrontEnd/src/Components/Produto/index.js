import React from 'react';

import './produto.css';


function Produto(props) {

    function show_info(event) {
        const target = event.currentTarget;
        const element = target.getElementsByTagName("figcaption")[0];
        element.style.visibility = "initial";
    }

    function hide_info(event) {
        const target = event.currentTarget;
        const element = target.getElementsByTagName("figcaption")[0];
        element.style.visibility = "hidden";
    }

    return(
    
            <figure className={props.categoria } onMouseOver={show_info} onMouseOut={hide_info}>
                <img  className="produto-imagem" src={require(`./img/${props.imagem}`).default} alt="Imagem de Produtos" />
                <figcaption className="produtos-descricao">
                    <p className="produtos-nome">
                        {props.descricao_produto}
                    </p>
                    <p className="produtos-preco-promocional">
                        R$ {props.preco_final}
                    </p>
                </figcaption>
            </figure>
        
    );
};

export default Produto;