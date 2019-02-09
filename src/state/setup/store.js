import { applyMiddleware, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
// import analyticsMiddleware from '../../analytics/middleware'
// import config from '../../config'
import * as reducers from './reducers'
import sagas from './sagas'

const sagaMiddleware = createSagaMiddleware()

const logger = createLogger({
  collapsed: true
})

const createStoreWithMiddleware = () => applyMiddleware(
  logger, 
   store => next => action => next(action), 
  sagaMiddleware(sagas)
)(createStore)

const store = createStoreWithMiddleware(reducers)


// const rootReducer = combinedReducers(reducers)

sagaMiddleware.run(sagas)

export default store