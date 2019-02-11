import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import monitorReducersEnhancer from './monitorReducers'
import loggerMiddleware from './logger'
// import createSagaMiddleware from 'redux-saga'
import * as reducers from './reducers'
import sagas from './sagas'

export default function configureStore(preLoadedState) {
  const middlewares = [loggerMiddleware, thunkMiddleware]
  const middlewareEnhancer = applyMiddleware(...middlewares)
  const enhancers = [middlewareEnhancer, monitorReducersEnhancer]
  const composedEnhancers = composeWithDevTools(...enhancers)
  const store = createStore(reducers, preLoadedState, composedEnhancers)

  return store
}
sagaMiddleware.run(sagas)