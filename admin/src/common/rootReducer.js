import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import sessionReducer from '../features/session/redux/reducer'
import { teamReducer, employeeReducer, keywordReducer } from '../features/team/redux/reducer'
import userReducer from '../features/user/redux/reducer'

const rootReducer = combineReducers({
  routing: routerReducer,
  session: sessionReducer,
  teams: teamReducer,
  users: userReducer,
  employees: employeeReducer,
  keywords: keywordReducer
});

export default rootReducer
