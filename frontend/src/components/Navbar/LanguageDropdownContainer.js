import { connect } from 'react-redux'
import LanguageDropdown from './LanguageDropdown'
import { changeLanguage } from '../../actions'

const mapDispatchToProps = dispatch => ({
  changeLang: lang => dispatch(changeLanguage(lang))
})

export default connect(
  null,
  mapDispatchToProps
)(LanguageDropdown)
