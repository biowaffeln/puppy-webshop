import { combineReducers } from 'redux'
import language from './language'
import auth from './auth'

export default combineReducers({
  language,
  auth
})
