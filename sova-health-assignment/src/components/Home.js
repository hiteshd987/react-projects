import React from 'react';
import './Home.css';
import { Container, Row, Col, Button } from "react-bootstrap";

function Home() {
    return (
        <>
            <Container fluid className="container-home">
                <Row>
                    <Col lg="6">
                        <Row className="row-inner-section-first-left">
                            <Col style={{fontSize: "xx-large"}}>Discover a Healthier You</Col>    
                        </Row>
                        <Row>
                            <div className="div-line" />
                        </Row>
                        <Row className="row-inner-section-first-left">
                            <Col style={{fontSize: "large"}}>Get a personalized nutrition program based on your lifestyle, habits and blood analysis.</Col>
                        </Row>
                        <Row className="row-inner-section-first-left">
                            <Col>
                                <Button className="btn-inner-getStarted">Get Started</Button>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg="6" sm="12">
                        <Row className="row-section-first-right">
                            <img className="img-first-right" src="https://static.wixstatic.com/media/9d3b92_99f1a6ad907e4aae84ca1d2bb15edf58~mv2.png/v1/fill/w_569,h_463,al_c,q_85,usm_0.66_1.00_0.01/HP_Image.webp" />
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Home
