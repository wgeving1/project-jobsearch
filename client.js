import React from 'react'
import { hydrate } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './src/index'
import { selector as users } from '../../../../state/entities/users/reducers'

const preloadedState = window.__PRELOADED_STATE__

delete window.__PRELOADED_STATE__

const store = createStore(users, preloadedState)

hydrate(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
)