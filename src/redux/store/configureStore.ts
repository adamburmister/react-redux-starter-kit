import thunk from 'redux-thunk'
import rootReducer from '../reducers'
import DevTools from '../../containers/DevTools'
import { routerMiddleware } from 'react-router-redux'

import {
  applyMiddleware,
  compose,
  createStore
} from 'redux'

export default function configureStore (initialState = {}, history: any) {
  // Compose final middleware and use devtools in debug environment
  let middleware = applyMiddleware(thunk, routerMiddleware(history))
  if (__DEBUG__) {
    const devTools = window.devToolsExtension
      ? window.devToolsExtension()
      : DevTools.instrument() // ES6 module
    middleware = compose(middleware, devTools)
  }

  const store = middleware(createStore)(rootReducer, initialState)

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers')
      store.replaceReducer(nextRootReducer)
    })
  }
  return store
}
