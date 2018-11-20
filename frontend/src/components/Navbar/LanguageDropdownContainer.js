import { connect } from 'react-redux'
import LanguageDropdown from './LanguageDropdown'
import { changeLanguage } from '../../actions'

const mapDispatchToProps = dispatch => ({
  changeLanguage: language => dispatch(changeLanguage(language))
})

export default connect(
  null,
  mapDispatchToProps
)(LanguageDropdown)
