import React, { Component } from 'react'
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Table_Component from "./Table_Component";

export default class Products_Display extends Component {

    state = {
        data: [
            {
                id: '',
                name: '',
                price: '',
                colors: [],
                condition: ''
            }
         ],
         added: false
    }

    addProduct = product => {
    console.log(this.state.added);
    console.log("Add");
   
        this.setState({
          added: true,
          data: product     
        });
    };
    
    removeProduct = product => {
        console.log(this.state.added);
        console.log("Remove");

        this.setState({
          added: false,
        data: product 
        });
        console.log(this.state);
    };

    render() {
        const product = this.props.product;
        return (
            <div>
                <Col md={3} sm={6} key={product.id} className="product-card-cols" >
                    <div className="products-card">
                        <img className="products-card-image" src={product.image} />

                        <Container>
                            <Row>
                                <Col>
                                    <p className="products-card-title">{product.name}</p>
                                </Col>
                                <Col>
                                    <p className="products-card-price" >{product.price}</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <p className="products-card-text">{product.description}</p>
                                </Col>
                            </Row>
                        </Container>
                        
                        <div className="cardButton-main">
                            {this.state.added ? (
                                    <Button
                                        onClick={() => this.removeProduct(product)}
                                        className="cardButton"
                                    >
                                        Remove
                                    </Button>
                                    ) : (
                                    <Button
                                        onClick={() => this.addProduct(product)}
                                        className="cardButton"
                                    >
                                        Compare
                                    </Button>
                            )} 
                        </div>
                    </div>
                </Col>
                <div>
                    { this.state.added ? <Table_Component product={this.state.data} />  : null }
                </div>
            </div>    
        )
    }
}
