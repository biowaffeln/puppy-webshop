import React from 'react'
import { Switch, Route } from 'react-router-dom'
import LandingPage from '../scenes/LandingPage'
import LoginPage from '../scenes/LoginPage'
import CartPage from '../scenes/CartPage'
import { PublicRoute } from './protectedRoutes'

const Routes = () =>
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <PublicRoute path="/login" component={LoginPage} />
    <Route path="/cart" component={CartPage} />
  </Switch>

export default Routes
