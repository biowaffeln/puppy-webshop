import { createBrowserHistory } from 'history'
import createReducer from './reducers'
import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

export const history = createBrowserHistory()

export const store = createStore(
  createReducer(history),
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ),
)
