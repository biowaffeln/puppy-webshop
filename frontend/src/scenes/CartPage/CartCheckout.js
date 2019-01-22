// Mark

import React from 'react'
import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PuppyCartList from '../../components/PuppyCartList'

const CartCheckout = ({ puppies }) =>
  <>
    <PuppyCartList puppies={puppies} />
    <div className="d-flex justify-content-end mb-4">
      <Button color="primary" tag={Link} to="confirm-order" className="mr-3">Buy Items!</Button>
      <Button color="primary" outline tag={Link} to="/">Continue Shopping</Button>
    </div>
  </>

const mapStateToProps = (state) => ({
  puppies: Object.values(state.cart)
})

export default connect(
  mapStateToProps
)(CartCheckout)
