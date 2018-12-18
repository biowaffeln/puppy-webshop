import React from 'react'
import { Input, Button } from 'reactstrap'
import { connect } from 'react-redux'
import { updatePuppyAmount, removePuppy } from '../../actions'

const PuppyNumberInput = ({ amount, setAmount, remove }) =>
  <span className="d-flex align-items-center">
    <Button
      color="bg-light"
      disabled={amount <= 1}
      onClick={() => setAmount(amount - 1)}
    >-</Button>
    <Input type="number"
      min={1}
      max={10}
      className="mx-2"
      value={amount}
      onChange={(e) => setAmount(e.target.value)}
    />
    <Button
      color="bg-light"
      disabled={amount >= 10}
      onClick={() => setAmount(amount + 1)}
    >+</Button>
    <Button close className="ml-4"
    onClick={remove}
    />
  </span>

const mapStateToProps = (state, props) => ({
  amount: state.cart[props.id].amount
})

const mapDispatchToProps = (dispatch, props) => ({
  setAmount: amount => dispatch(updatePuppyAmount(props.id, amount)),
  remove: () => dispatch(removePuppy(props.id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PuppyNumberInput)
