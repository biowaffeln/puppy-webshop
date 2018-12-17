import React from 'react'
import { Row, Col, Button, Card, Input } from 'reactstrap'
import './CartItem.scss'

const CartItem = ({ puppy }) =>
  <Row>
    <Col xs={3} md={3}>
      <div className="avatar"
        style={{ backgroundImage: `url(${puppy.imageUrl})` }}></div>
    </Col>
    <Col xs={5} md={3}>
      <h3 className="mb-1">{puppy.name}</h3>
      <p className="text-secondary mb-0">{puppy.description['DE']}</p>
    </Col>
    <Col xs={4} md={3} >
      <p className="font-weight-bold mb-0 mt-3">{puppy.price} $</p>
    </Col>
    <Col xs={12} md={3}>
      <p className="mb-0 mt-3">
        <Input type="number" min={1} />
      </p>
    </Col>
  </Row>

export default CartItem
