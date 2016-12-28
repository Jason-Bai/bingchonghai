import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './App'
import Login from '../session/Login'
import Home from './Home'
import User from '../user'
import Category from '../category'

export default (
  <Route path="/">
    <IndexRoute component={Login} />
    <Route path="admin" component={App}>
      <IndexRoute component={Home} />
      <Route path="profile" component={User.Profile} />
      <Route path="users" component={User.UserList} />
      <Route path="categories" component={Category.CategoryList} />
    </Route>
  </Route>
)
