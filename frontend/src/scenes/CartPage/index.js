import {connect} from 'react-redux'
import CartPage from './CartPage'

const mapStateToProps = state => ({
  cart: Object.keys(state.cart).map(key => state.cart[key].puppy)
})

export default connect(
  mapStateToProps
)(CartPage)
