import React from 'react'
import "./Skills.css";
import {Col, Row, Container } from "react-bootstrap";

function Skills() {
    return (
        <div>  
            <div className="skills"> 
                <h1>FET Technologies</h1>     
                <Container fluid className="container__FET">
                    <Row className="row__skills">
                        <Col className="col__skills">
                                    React
                        </Col>
                        <Col className="col__skills">
                                    Angular
                        </Col>
                        <Col className="col__skills">
                                    HTML5
                        </Col>
                    </Row>
                    <Row className="row__skills">
                        <Col className="col__skills" lg="4">
                                    CSS3
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="skills"> 
                <h1>Backend Technologies</h1>     
                <Container fluid className="container__backend">
                    <Row className="row__skills">
                        <Col className="col__skills">
                                    Java
                        </Col>
                        <Col className="col__skills">
                                    Python
                        </Col>
                        <Col className="col__skills">
                                    Java
                        </Col>
                    </Row>
                    <Row className="row__skills">
                        <Col className="col__skills" lg="4">
                                    Python
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Skills
