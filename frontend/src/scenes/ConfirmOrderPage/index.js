// Mark, Alex

import React from 'react'
import { Card, Container, Col, Row, Button } from 'reactstrap'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import PuppyCartList from '../../components/PuppyCartList'
import Api from '../../services/api.service'
import UserAddress from './UserAddress'
import { clearCart } from '../../actions'

class ConfirmOrderPage extends React.Component {

  state = {
    address: null,
    ordered: false,
    error: false
  }

  order = async () => {
    try {
      await Api.createOrder(this.props.auth, this.props.puppies)
      this.setState({ ordered: true })
      this.props.clearCart()
    } catch {
      this.setState({ error: true })
    }
  }

  async componentDidMount() {
    const address = (await Api.getMyAddress(this.props.auth))[0]
    this.setState({ address })
  }

  render() {
    const { puppies } = this.props
    const { address, ordered, error } = this.state

    if (error) { 
      return (
        <Container className="mt-5 d-flex flex-column align-items-center">
          <h2>an error occured :(</h2>
          <p>you're not supposed to see this</p>
          <Link to="/">go back to shopping</Link>
        </Container>
      )
    }

    if (ordered) {
      return (
        <Container className="mt-5 d-flex flex-column align-items-center">
          <p style={{ fontSize: '4em' }}><span role="img" aria-label="Party Cone">🎉</span></p>
          <p className="mb-0">thanks for ordering!</p>
          <p>your puppy will soon be delivered</p>
          <Link color="primary" to="orders">see my orders</Link>
        </Container>
      )
    }

    return (
      <Container>
        <Row>
          <Col xs="12" md="6">
            <h2 className="my-4">your order:</h2>
            <Card className="p-4 shadow-blurred">
              <PuppyCartList puppies={puppies} />
            </Card>
          </Col>
          <Col xs="12" md="6">
            <h2 className="my-4">your address:</h2>
            {address && <UserAddress address={address} />}
            <Button color="primary" onClick={this.order}>Order Now!</Button>
          </Col>
        </Row>
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({
  puppies: Object.values(state.cart),
  auth: state.auth.data
})

const mapDispatchToProps = dispatch => ({
  clearCart: () => dispatch(clearCart())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConfirmOrderPage)
