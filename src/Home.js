import * as React from "react";
import './Home.css';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';



function Home() {

    return (
        <Container fluid>
            <Carousel>
                <Carousel.Item interval={3000}>
                    <img src="/images/home1.jpg" alt="First slide" className="d-block w-100" />
                    <Carousel.Caption>
                    <h3>Get to Know</h3>
                    <p>Me more through this personal website.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img src="/images/home2.jpg" alt="Second slide" className="d-block w-100" />
                    <Carousel.Caption>
                    <h3>Explore</h3>
                    <p>Comprehensive information about myself.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img src="/images/home3.jpg" alt="Third slide" className="d-block w-100" />
                    <Carousel.Caption>
                    <h3>Look Back</h3>
                    <p>On my history as well as my achievements so far.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
    );
}


export default Home;