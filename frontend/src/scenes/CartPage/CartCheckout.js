import React from 'react'
import { Button } from 'reactstrap'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Api from '../../services/api.service'

const total = puppies =>
  puppies
    .reduce((sum, p) => sum + p.amount * Number(p.puppy.price), 0)
    .toFixed(2)

const CartCheckout = ({ puppies }) =>
  <>
    <pre>{JSON.stringify(puppies, null, 4)}</pre>
    {puppies.map(p =>
      <p key={p.puppy.id}>
        <span className="font-weight-bold">{p.puppy.name} </span>
        <span className="float-right">{p.amount} x {p.puppy.price} €</span>
      </p>
    )}
    <hr />
    <p className="pb-4" style={{ fontSize: '1.3em' }}>
      <span>total: </span>
      <span className="float-right">{total(puppies)} € </span>
    </p>
    <div className="d-flex justify-content-end mb-4">
      <Button color="primary" className="mr-3" onClick={() => Api.createOrder(puppies)}>Buy Items!</Button>
      <Button color="primary" outline tag={Link} to="/">Continue Shopping</Button>
    </div>
  </>

const mapStateToProps = (state) => ({
  puppies: Object.values(state.cart)
})

export default connect(
  mapStateToProps
)(CartCheckout)
