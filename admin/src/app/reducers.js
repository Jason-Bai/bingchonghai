import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'

import { auth } from '../session/redux/reducers'

const users = require('../user/redux/reducers').default

const rootReducer = combineReducers({
  auth,
  users,
  routing
})

export default rootReducer
