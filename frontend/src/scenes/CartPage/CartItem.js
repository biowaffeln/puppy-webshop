import React from 'react'
import { Row, Col } from 'reactstrap'
import PuppyNumberInput from './PuppyNumberInput'
import './CartItem.scss'

const CartItem = ({ puppy }) =>
  <Row>
    <Col xs={3} md={2}>
      <div className="avatar"
        style={{ backgroundImage: `url(${puppy.image_url})` }}></div>
    </Col>
    <Col xs={5} md={3}>
      <h3 className="mb-1">{puppy.name}</h3>
      <p className="text-secondary mb-0">{puppy.description['DE']}</p>
    </Col>
    <Col xs={4} md={3} >
      <p className="font-weight-bold mb-0 mt-3">{puppy.price} €</p>
    </Col>
    <Col xs={12} md={4}>
      <p className="mb-0 mt-3">
        <PuppyNumberInput id={puppy.id} />
      </p>
    </Col>
  </Row>

export default CartItem
