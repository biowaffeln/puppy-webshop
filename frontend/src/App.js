// Mark

import React from 'react'
import Navbar from './components/Navbar'
import Routes from './routes'
import { ConnectedRouter } from 'connected-react-router'
import { history } from './store'

const App = () =>
  <ConnectedRouter history={history} >
    <>
      <Navbar />
      <Routes />
    </>
  </ConnectedRouter>

export default App
