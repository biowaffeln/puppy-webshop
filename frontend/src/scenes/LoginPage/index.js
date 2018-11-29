import LoginForm from './LoginForm'
import { connect } from 'react-redux'
import { login } from '../../actions'

const mapDispatchToProps = dispatch => ({
  onSubmit: formData => dispatch(login(formData))
})

export default connect(
  null,
  mapDispatchToProps
)(LoginForm)
