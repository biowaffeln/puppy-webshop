import React, { Component } from 'react'
import { connect } from 'react-redux'
import OrderListPage from './OrderListPage'
import Api from '../../services/api.service'

class OrderListContainer extends Component {

  state = {
    orders: [],
    error: false
  }

  async componentDidMount() {
    try { // TODO: Sinnvoller try/catch

    const orders = await Api.getMyOrders(this.props.token)
    this.setState({ orders })
    }
    catch {
      this.setState({error: true})
    }
  }

  render() {
    if(this.state.error) {
      return <p>ein Fehler ist aufgetreten!</p>
    }
    return (
      <OrderListPage orders={this.state.orders} language={this.props.language} />
    )
  }

}

const mapStateToProps = state => ({
  token: state.auth.data,
  language: state.language
})

export default connect(
  mapStateToProps,
)(OrderListContainer)