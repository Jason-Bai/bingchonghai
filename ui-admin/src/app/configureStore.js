import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from './reducers'

const NODE_ENV = process.env.NODE_ENV || 'development'

let enhancers

const configureStore = preloadedState => {

  if (NODE_ENV === 'development') {
    enhancers =compose(applyMiddleware(thunk, createLogger()))
  } else {
    enhancers =applyMiddleware(thunk)
	}

  const store = createStore(
    rootReducer,
    preloadedState,
		enhancers
  )

  if (NODE_ENV === 'development' && module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}

export default configureStore
