import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './containers/App'
import Login from './components/Login'

export default (
  <Route path="/">
    <IndexRoute component={App} />
    <Route path="login" component={Login} />
  </Route>
)
