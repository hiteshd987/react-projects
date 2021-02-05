import React from 'react'
import "./Projects.css";
import { Col, Row, Container, Card, CardGroup } from "react-bootstrap";

function Projects() {
    return (
        <div>
            <CardGroup>
                <Card className="project__card">
                    {/* <Card.Img className="project__cardLogo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" /> */}
                    <Card.Body>
                        <Card.Title>
                            Amazon Clone
                        </Card.Title>
                        <Card.Text className="project__cardText">
                            I have created an amazon clone using react 
                        </Card.Text>
                        <Card.Link href="www.google.com">Github</Card.Link>
                    </Card.Body>
                </Card>
                <Card className="project__card">
                    {/* <Card.Img className="project__cardLogo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" /> */}
                    <Card.Body>
                        <Card.Title>
                            Amazon Clone 2
                        </Card.Title>
                        <Card.Text className="project__cardText">
                            I have created an amazon clone using react 
                        </Card.Text>
                        <Card.Link href="www.google.com">Github</Card.Link>
                    </Card.Body>
                </Card>
                <Card className="project__card">
                    {/* <Card.Img className="project__cardLogo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" /> */}
                    <Card.Body>
                        <Card.Title>
                            Amazon Clone 3
                        </Card.Title>
                        <Card.Text className="project__cardText">
                            I have created an amazon clone using react 
                        </Card.Text>
                        <Card.Link href="www.google.com">Github</Card.Link>
                    </Card.Body>
                </Card>
            </CardGroup>
        </div>
    )
}

export default Projects
