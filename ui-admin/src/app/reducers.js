import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';

import { auth, session } from '../session/redux/reducers';

import users from '../user/redux/reducers';
import categories from '../category/redux/reducers';
import diseases from '../disease/redux/reducers';

const rootReducer = combineReducers({
  auth,
  session,
  users,
  categories,
  diseases,
  routing
})

export default rootReducer
