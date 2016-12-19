import React from 'react'
import { Route, IndexRoute, IndexRedirect } from 'react-router'
import Admin from './containers/Admin'
import Signin from './containers/Signin'
import Auth from './containers/Auth'
import Dashboard from './features/dashboard'
import Profile from './containers/Profile'

import Team from './features/team'
import User from './features/user'
import Keyword from './features/keyword'

export default  (
  <Route path="/admin" component={Admin}>
    <IndexRoute component={Dashboard} />
    <Route path="teams">
      <IndexRoute component={Team.TeamList} />
      <Route path=":teamId" component={Team.TeamDetail} />
    </Route>
    <Route path="users">
      <IndexRoute component={User.UserList} />
      <Route path=":userId" component={User.UserDetail} />
    </Route>
    <Route path="keywords">
      <IndexRoute component={Keyword.KeywordList} />
    </Route>
  </Route>
)
