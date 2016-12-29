import React from 'react'
import { render } from 'react-dom'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import Root from './app/Root'
import configureStore from './app/configureStore'

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

const rootElement = document.getElementById('root')

render(
  <Root store={store} history={history} />,
  rootElement
)
