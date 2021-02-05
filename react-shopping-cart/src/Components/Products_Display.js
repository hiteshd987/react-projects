import React from 'react'
import { Col, Row, Container, Button } from 'react-bootstrap';
import './Products_Display.css';
import { useDispatch } from 'react-redux';
import { addToCart } from '../Components/actions';
import { useEffect } from "react";

function Products_Display(props) {
    const product = props.product;
    const dispatch = useDispatch();
    
    useEffect(() => {
        console.log("useeffect");
    }, []);

    return (


        <Col md={3} className="products-column" >
                    <div className="products-image">
                        <img src={product.image} style={ {width:"200px"} } />
                    </div>
                    <Container fluid>
                        <Row className="products-info">
                            <Col lg={12} md={12}>
                                {product.title}
                            </Col>
                            <Col lg={12} md={12}>
                                {product.price}
                            </Col>
                            <Col lg={12} md={12} className="products-addToCart" >
                                <Button onClick={() => dispatch(addToCart(product))} className="products-addToCartBtn">Add to cart</Button>
                            </Col>
                        </Row>
                    </Container>
                </Col>
    )
}

export default Products_Display;

