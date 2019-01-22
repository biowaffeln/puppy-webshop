import React from 'react'
import { Container, Col, Row, Button } from 'reactstrap'
import { connect } from 'react-redux'
import PuppyCartList from '../../components/PuppyCartList'
import Api from '../../services/api.service'
import UserAddress from './UserAddress'
import { clearCart } from '../../actions'

class ConfirmOrderPage extends React.Component {

  state = {
    address: null,
    ordered: false
  }

  order = async () => {
    await Api.createOrder(this.props.auth, this.props.puppies)
    this.setState({ ordered: true })
    this.props.clearCart()
  }

  async componentDidMount() {
    const address = (await Api.getMyAddress(this.props.auth))[0]
    this.setState({ address })
  }

  render() {
    const { puppies } = this.props
    const { address, ordered } = this.state

    if (ordered) {
      return <Container>
        <p>thanks for ordering!</p>
      </Container>
    }

    return (
      <Container>
        <Row>
          <Col xs="12" md="6">
            <h2 className="my-4">your order:</h2>
            <PuppyCartList puppies={puppies} />
          </Col>
          <Col xs="12" md="6">
            <h2 className="my-4">your address:</h2>
            {address && <UserAddress address={address} />}
            <Button color="primary" onClick={this.order}>Order Now!</Button>
          </Col>
        </Row>
      </Container >
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
