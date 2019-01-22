// Mark

import React from 'react'
import {
  Card
} from 'reactstrap'

const puppyAmount = puppies => puppies.reduce((n, puppy) => n + puppy.amount, 0)
const pluralizePuppy = n => n === 1 ? 'puppy' : 'puppies'
const totalPrice = puppies =>
  puppies
    .reduce((sum, p) => sum + p.amount * Number(p.price), 0)
    .toFixed(2)


const OrderCard = ({ order }) => {

  const amount = puppyAmount(order.puppies)
  const price = totalPrice(order.puppies)
  const puppy = pluralizePuppy(amount)
  const date = new Date(order.date).toLocaleDateString('DE')

  return (
    <Card className="p-4 shadow-blurred">
      <h3 className="mb-3">Order number #{order.id}</h3>
      <p className="mb-3">{amount} {puppy}</p>
      <p className="mb-1"><span className="font-weight-bold">total price:</span> {price} € </p>
      <p className="mb-1"><span className="font-weight-bold">order placed:</span> {date}</p>
    </Card>
  )
}


export default OrderCard