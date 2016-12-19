import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'

const { auth } = require('./login').default

const rootReducer = combineReducers({
  auth,
  routing
})

export default rootReducer
