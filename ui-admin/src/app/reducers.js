import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';

import { auth, session } from '../session/redux/reducers';

import users from '../user/redux/reducers';
import categories from '../category/redux/reducers';
import diseases from '../disease/redux/reducers';
import articles from '../article/redux/reducers';
import files from '../file/redux/reducers';

const rootReducer = combineReducers({
  auth,
  session,
  users,
  categories,
  diseases,
  articles,
  files,
  routing
})

export default rootReducer
