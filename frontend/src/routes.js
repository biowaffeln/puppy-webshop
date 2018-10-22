import React from 'react'
import { Switch, Route } from 'react-router-dom'
import LandingPage from './scenes/LandingPage'
import LoginPage from './scenes/LoginPage'
import CartPage from './scenes/CartPage'

const Routes = () =>
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/login" component={LoginPage} />
    <Route path="/cart" component={CartPage} />
  </Switch>

export default Routes
