import React from 'react'
import { connect } from 'react-redux'
import OrderListContainer from './OrderListContainer'

const OrderListPage = ({ language }) =>
  <div>
    <OrderListContainer language={language}/>
  </div>

const mapStateToProps = state => ({
  language: state.language
})

export default connect(
  mapStateToProps
)(OrderListPage)