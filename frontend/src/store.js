// Mark

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
  whitelist: ['language', 'auth', 'cart']
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
  persistReducer(persistConfig, createReducer(history)),
  composeEnhancers(
    applyMiddleware(thunk),
  ),
)

export const persistor = persistStore(store)
