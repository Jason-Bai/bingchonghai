import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './app/App'
import Login from './login/Login'
import Signup from './signup/Signup'
import Dashboard from './dashboard/Dashboard'
import User from './user'
import Category from './category'

export default (
  <Route path="/" component={App}>
    <Route path="signup" component={Signup} />
    <Route path="login" component={Login} />
    <Route path="admin">
      <IndexRoute component={Dashboard} />
      <Route path="profile" component={User.Profile} />
      <Route path="users" component={User.UserList} />
      <Route path="categories" component={Category.CategoryList} />
    </Route>
  </Route>
)
