import { createBrowserHistory } from 'history'
import createReducer from './reducers'
import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

export const history = createBrowserHistory()

const persistConfig = {
  key: 'redux',
  storage,
  whitelist: ['language', 'auth']
}

export const store = createStore(
  persistReducer(persistConfig, createReducer(history)),
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ),
)

export const persistor = persistStore(store)
