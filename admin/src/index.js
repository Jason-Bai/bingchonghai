import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { browserHistory, Router } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import configureStore from './common/configStore'
import routes from './routes'
import './global.css'

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

const root = document.getElementById('root')

render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  root
)
