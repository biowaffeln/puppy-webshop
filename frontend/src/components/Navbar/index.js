import { logout } from '../../actions'
import Navbar from './Navbar'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

const mapStateToProps = state => ({
  language: state.language,
  isLoggedIn: !!state.auth.data,
})

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
})

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Navbar)
