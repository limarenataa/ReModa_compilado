import React from 'react';
import { Container } from 'react-bootstrap';
import BannerPrincipal from '../Components/BannerPrincipal';


function Banner() {
    return (
        <React.StrictMode>
            <BannerPrincipal />  
            <Container>
                <br/>
                <p className="lead display-4">Seja bem vindo(a)!</p>
                <h2>Reinvente seu estilo!</h2>
            </Container>
        </React.StrictMode>
        );
};

export default Banner;