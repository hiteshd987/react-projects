import React from 'react';
import { StyledMenu } from './Menu.styled';
import { bool } from 'prop-types';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
// import { useEffect } from 'react';

const Menu = ({ open }) => {
  const cartProducts = useSelector(state => state.cart.cartItems);
  const subtotal = useSelector(state => state.cart.subTotal);
  // const quantity = useSelector(state => state.cart.quantity);

  console.log(subtotal);
  console.log(cartProducts.quantity);

  return (
    <StyledMenu open={open}>
      <Container>
      <p>{cartProducts.length}</p>
      <Row className="menu-title">
        <Col>
            Add some products to the cart
        </Col>
      </Row>
        {
              cartProducts.map(cartProduct => (
              <div className="cart-products-section">
                <Row className="cart-products-row">
                  <Col md={3} className="cart-products-image-col">
                      <img className="cart-products-image" src={cartProduct.image} />
                  </Col>
                  <Col>
                    <p>{cartProduct.length}</p>
                    <Row className="cart-products-title">
                      <Col>
                          {cartProduct.title}
                      </Col>
                    </Row>
                    <Row className="cart-products-title">
                      <Col>
                       {cartProduct ? cartProduct.availableSizes + "|" + cartProduct.style : null}
                      </Col>
                      <Col md={1}>
                        ${cartProduct.price}
                      </Col>
                    </Row>
                    <Row className="cart-products-title">
                      <Col>
                          Quantity: {cartProducts.quantity}
                      </Col>
                      <Col>
                        <Button>+</Button>
                        <Button>-</Button>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>
            ))
          } 

        <Row>
          <Container fluid>
            <Row>
              <Col>
                Subtotal
              </Col>
              <Col>
                $ {subtotal}
              </Col>
            </Row>
            <Row>
              <Col>
                <Button>
                  Checkout
                </Button>
              </Col>
            </Row>
          </Container>

        </Row>
      </Container>
    </StyledMenu>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
}

export default Menu;