import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './ui/index'
import configureStore from './state/setup/configureStore'
import * as serviceWorker from './ui/serviceWorker'

const store = configureStore()

const renderApp = () =>
  render(
   <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </Provider>,
    document.getElementById('root')
  )
if(process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./ui/index')
}
renderApp()


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
