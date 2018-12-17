import {connect} from 'react-redux'
import CartPage from './CartPage'

const mapStateToProps = state => ({
  cart: state.cart
})

export default connect(
  mapStateToProps
)(CartPage)
