import React from 'react'
import CartItem from './CartItem'
import { Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import CartCheckout from './CartCheckout'

const CartPage = ({ cart }) =>

  cart.length === 0

    ? <Container className="mt-5 d-flex flex-column align-items-center">
      <p style={{ fontSize: '4em' }}>🐶</p>
      <h3>cart is empty</h3>
      <Link color="primary" to="/">go back to shopping</Link>
    </Container>

    : <Container>
      <Row className="mt-5">
        <Col>
          {cart.map(puppy =>
            <React.Fragment key={puppy.id}>
              <Col xs={12}>
                <CartItem puppy={puppy} />
              </Col>
              <Col xs={12}>
                <hr />
              </Col>
            </React.Fragment>
          )}
        </Col>
        <Col className="mt-4" sm={12} lg={4}>
          <CartCheckout />
        </Col>
      </Row>
    </Container>


export default CartPage
