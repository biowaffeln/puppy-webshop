import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

 const UserRoute = ({ component: Component, isAuthenticated, ...rest }) =>
  <Route {...rest} render={props => (
    isAuthenticated()
    ? <Component {...props} />
    : <Redirect to='/login' />
  )}/>

 const PublicRoute = ({ component: Component, isAuthenticated, ...rest }) =>
  <Route {...rest} render={props => (
    isAuthenticated()
    ? <Redirect to='/' />
    : <Component {...props} />
  )} />

const mapStateToProps = state => ({
  isAuthenticated: () => !state.auth.loading && state.auth.data
})

const connectedPublicRoute = connect(mapStateToProps)(PublicRoute)
const connectedUserRoute = connect(mapStateToProps)(UserRoute)

export {
  connectedPublicRoute as PublicRoute,
  connectedUserRoute as UserRoute
}
