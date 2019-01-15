import React from 'react'
import { connect } from 'react-redux'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap'

const OrderCard = ({ order }) => {
  const { total_price, puppies, date, user } = order
  return (
    <div>
      <Card className="shadow-blurred">
        {JSON.stringify(order, null, 4)}
      </Card>
    </div>
  )
}


export default OrderCard