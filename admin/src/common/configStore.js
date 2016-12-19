import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { routerMiddleware } from 'react-router-redux'
import rootReducer from './rootReducer'
import { browserHistory } from 'react-router'

const middlewares = [thunk, routerMiddleware(browserHistory)];

let devToolsExtension = f => f;

/* istanbul ignore if  */
if (process.env.NODE_ENV === 'development') {
  const createLogger = require('redux-logger')

  const logger = createLogger({ collapsed: true })

  middlewares.push(logger);

  if (window.devToolsExtension) {

    devToolsExtension = window.devToolsExtension()

  }
}

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, compose(
    applyMiddleware(...middlewares),
    devToolsExtension
  ));
  return store;
}
