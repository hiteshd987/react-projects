import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import './Products.css';
import products from "../products.json";
import Products_Display from "./Products_Display";
import { addProduct, removeProduct } from "../Actions/index";

function Products() {
    return (
        <div className="products">
                <Container fluid>
                    <div className="products-main">
                        <Row className="products-main1">
                            <h1>Compare Products</h1>
                        </Row>
                        <Row className="products-main2">
                            {products.map(product => (
                                <Products_Display 
                                    key={product.id}
                                    product={product}
                                    addProduct={addProduct}
                                    removeProduct={removeProduct}
                                />
                                )) 
                            }
                        </Row>
                    </div>
                </Container>
        </div>
    )
}

export default Products
