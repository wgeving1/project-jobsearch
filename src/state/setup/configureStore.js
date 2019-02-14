import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import monitorReducersEnhancer from './monitorReducers'
import loggerMiddleware from './logger'
// import createSagaMiddleware from 'redux-saga'
import appReducer from './reducers'
// import sagas from './sagas'

export default function configureStore(preLoadedState) {
  const middlewares = [loggerMiddleware, thunkMiddleware]
  const middlewareEnhancer = applyMiddleware(...middlewares)
  const enhancers = [middlewareEnhancer, monitorReducersEnhancer]
  const composedEnhancers = composeWithDevTools(...enhancers)
  
  const store = createStore(appReducer, preLoadedState, composedEnhancers)

  if(process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./reducers', () => store.replaceReducer(appReducer))
  }
  return store
}
// sagaMiddleware.run(sagas)