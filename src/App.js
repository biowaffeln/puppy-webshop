import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './routes'

const App = () =>
  <Router>
    <>
      <Navbar />
      <Routes />
    </>
  </Router>

export default App
