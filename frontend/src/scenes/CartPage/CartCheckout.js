import React from 'react'
import { Button } from 'reactstrap'
import { connect } from 'react-redux'

const total = puppies =>
  puppies
    .reduce((sum, p) => sum + p.amount * Number(p.puppy.price), 0)
    .toFixed(2)

const CartCheckout = ({ puppies }) =>
  <>
    {puppies.map(p =>
      <p key={p.puppy.id}>
        <span>{p.puppy.name} </span>
        <span>{p.amount} x {p.puppy.price} €</span>
      </p>
    )}
    <hr />
    <p>total: {total(puppies)} €</p>
    <Button color="primary" className="mr-3">Buy Items!</Button>
    <Button color="primary" outline>Continue Shopping</Button>
  </>

const mapStateToProps = (state) => ({
  puppies: Object.values(state.cart)
})

export default connect(
  mapStateToProps
)(CartCheckout)
