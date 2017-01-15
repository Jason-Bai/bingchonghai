import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';
import App from './App';
import Login from '../session/Login';
import Logout from '../session/Logout';
import Home from './Home';
import User from '../user';
import Category from '../category';
import Disease from '../disease';
import Article from '../article';

export default (
  <Route path="/">
    <IndexRoute component={Login} />
    <Route path="login" component={Login} />
    <Route path="logout" component={Logout}/>
    <Route path="admin" component={App}>
      <IndexRoute component={Home} />
      <Route path="profile" component={User.Profile} />
      <Route path="users">
        <IndexRoute component={User.UserList} />
        <Route path="create" component={User.UserCreate} />
      </Route>
      <Route path="categories">
        <IndexRoute component={Category.CategoryList} />
        <Route path="create" component={Category.CategoryCreate} />
      </Route>
      <Route path="diseases">
        <IndexRoute component={Disease.DiseaseList} />
        <Route path="create" component={Disease.DiseaseCreate} />
      </Route>
      <Route path="articles">
        <IndexRoute component={Article.ArticleList} />
        <Route path="create" component={Article.ArticleCreate} />
        <Route path=":articleId/preview" component={Article.ArticlePreview} />
      </Route>
    </Route>
  </Route>
);
