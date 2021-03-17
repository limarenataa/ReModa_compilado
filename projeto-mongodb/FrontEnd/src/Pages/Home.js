import React from 'react';
import { Container } from 'react-bootstrap';
import {lazy, Suspense} from 'react';

//Aplicação de Lazy Loading no componente BannerCarousel
const BannerCarousel = lazy(() => import('../CodeSplitting/BannerCarousel'));

function Banner() {
    return (
        <>

            <Suspense fallback={
                <Container>
                    <br/>
                    <p className="lead display-4" style={{textAlign:'center'}}>Seja bem vindo(a)!</p>
                
                </Container>
            }>
            <BannerCarousel />
            </Suspense>

            <Container>
                <br/>
                <h1>ReModa</h1>
                <hr/>
                <h2>Reinvente seu estilo!</h2>
            </Container>
            
        </>
    );
};

export default Banner;