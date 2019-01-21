import React from 'react'
import { Switch, Route } from 'react-router-dom'
import LandingPage from '../scenes/LandingPage'
import LoginPage from '../scenes/LoginPage'
import CartPage from '../scenes/CartPage'
import OrderListPage from '../scenes/OrderListPage'
import ConfirmOrderPage from '../scenes/ConfirmOrderPage'
import DetailsPage from '../scenes/DetailsPage'
import { PublicRoute, UserRoute } from './protectedRoutes'

const Routes = () =>
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <PublicRoute path="/login" component={LoginPage} />
    <Route path="/cart" component={CartPage} />
    <UserRoute path="/orders" component={OrderListPage} />
    <UserRoute path="/confirm-order" component={ConfirmOrderPage} />
    <Route path="/puppies/:id" component={DetailsPage} />
  </Switch>


export default Routes
