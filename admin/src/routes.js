import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './app/App'
import Login from './login/Login'

export default (
  <Route path="/">
    <IndexRoute component={App} />
    <Route path="login" component={Login} />
  </Route>
)
