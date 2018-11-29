import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import language from './language'
import auth from './auth'

export default history => combineReducers({
  router: connectRouter(history),
  language,
  auth
})
