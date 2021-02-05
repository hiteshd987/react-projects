import React, { Component } from 'react'
import product from '../products_data.json';
import { Container, Row, Col } from 'react-bootstrap';
import Products_Display from './Products_Display';
import './Products.css';

export default class Products extends Component {
    render() {
        const products = product;
        return (
                <div className="products-main">
                    <Container fluid class="products-sizes" style={{width: "20%"},{height:"100%"},{position: "absolute"},{ display:"flex"}} >
                        <Row>
                            <Col>
                                Sizes
                            </Col>
                        </Row>
                    </Container>

                    <Container fluid className="products-data" style={{ width:"80%" }}>
                    <Row>
                        <Col>
                            <p>{products.length} Products Found</p>
                        </Col>
                        <Col>
                            Order By
                        </Col>
                    </Row>    

                    <Row className="products-row">
                        {products.map(product => (
                           <Products_Display 
                                key={product.id}
                                product={product}
                           /> 
                         ))
                        }
                    </Row>
                </Container>

                </div>
                        )
    }
}
