import React from 'react'
import {
    Col,
    Row,
  Card
} from 'reactstrap'

const OrderCard = ({ order, puppy }) => {
  return (
    <div>
      <Card className="shadow-blurred">
        <Row>
          <Col xs="auto">
              <h5> ID:  {order.id} </h5>
          </Col>
          <Col xs="auto">
              <h5> Menge:  {order.amount} </h5>
          </Col>
            <Col>
             <h5> Preis:  {order.price}</h5>
            </Col>
        </Row>

          {JSON.stringify(order, null, 4)}
      </Card>
    </div>
  )
}


export default OrderCard