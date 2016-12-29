import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';

import { auth } from '../session/redux/reducers';

import users from '../user/redux/reducers';

const rootReducer = combineReducers({
  auth,
  users,
  routing
})

export default rootReducer
