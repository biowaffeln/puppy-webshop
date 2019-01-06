import React from 'react'
import CartItem from './CartItem'
import { Container, Row, Col } from 'reactstrap'
import CartCheckout from './CartCheckout'

const CartPage = ({ cart }) =>
  <Container>
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
