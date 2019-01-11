import React, { Component } from 'react'
import OrderListPage from './OrderListPage'
import Api from '../../services/api.service'

class OrderListContainer extends Component {

  state = {
    orders: []
  }

  async componentDidMount() {
    const orders = await Api.getMyOrders()
    this.setState({ orders })
  }

  render() {
    return (
      <OrderListPage orders={this.state.orders}/>
    )
  }

}

export default OrderListContainer