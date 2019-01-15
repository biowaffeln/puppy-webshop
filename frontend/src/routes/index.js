import React from 'react'
import { Switch, Route } from 'react-router-dom'
import LandingPage from '../scenes/LandingPage'
import LoginPage from '../scenes/LoginPage'
import CartPage from '../scenes/CartPage'
import OrderListPage from '../scenes/OrderListPage'
import DetailsPage from '../scenes/DetailsPage'
import { PublicRoute } from './protectedRoutes'

const Routes = () =>
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <PublicRoute path="/login" component={LoginPage} />
    <Route path="/cart" component={CartPage} />
    <Route path="/orders" component={OrderListPage} />
    <Route path="/puppies/:id" component={DetailsPage} />
  </Switch>


export default Routes
