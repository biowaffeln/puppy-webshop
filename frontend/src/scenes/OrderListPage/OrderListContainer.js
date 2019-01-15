import React, { Component } from 'react'
import { connect } from 'react-redux'
import OrderListPage from './OrderListPage'
import Api from '../../services/api.service'

class OrderListContainer extends Component {

  state = {
    orders: []
  }

  async componentDidMount() {
    if(this.props.auth !== null) { // TODO: Überprüfung von Routen auslagern?
      const orders = await Api.getMyOrders(this.props.auth)
      this.setState({ orders })
    } else {
      const orders = undefined
      this.setState({ orders })
    }
  }

  render() {
    return (
      <OrderListPage orders={this.state.orders}/>
    )
  }

}

const mapStateToProps = state => ({
  auth: state.auth.data,
})


export default connect(
  mapStateToProps,
)(OrderListContainer)