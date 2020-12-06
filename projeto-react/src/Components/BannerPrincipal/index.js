import { Carousel } from 'react-bootstrap';


export default function BannerPrincipal() {
    return (
    
        <Carousel>
            
            <Carousel.Item interval={3000} >
                <img className="d-block w-100"src="https://i.imgur.com/WszSF7M.png" alt="First slide"/>
                <Carousel.Caption>
                    <h3>Estilo</h3>
                    <p>Garanta já o melhor estilo para o seu visual.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={3000} >
                <img className="d-block w-100" src="https://i.imgur.com/G1egUGu.png" alt="Second slide"/>
                <Carousel.Caption>
                    <h3>Elegância</h3>
                    <p>Mantenha sempre a elegância.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel >

    );
};

