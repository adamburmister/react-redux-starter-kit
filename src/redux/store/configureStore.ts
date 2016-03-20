import thunk from 'redux-thunk'
import rootReducer from '../reducers'
import DevTools from '../../containers/DevTools'
import { routerMiddleware } from 'react-router-redux'

import {
  applyMiddleware,
  compose,
  createStore
} from 'redux'

declare var __DEBUG__: Boolean;
declare var module: any;

export default function configureStore (initialState: Object, history: any) {
  let createStoreWithMiddleware: Function
  // Compose final middleware and use devtools in debug environment
  const middleware: Function = applyMiddleware(thunk, routerMiddleware(history))

  if (__DEBUG__) {
    createStoreWithMiddleware = compose(
      middleware,
      window.devToolsExtension
        ? window.devToolsExtension()
        : DevTools.instrument() // ES6 module
    )
  } else {
    createStoreWithMiddleware = compose(middleware)
  }

  const store = createStoreWithMiddleware(createStore)(rootReducer, initialState)
  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers')
      store.replaceReducer(nextRootReducer)
    })
  }
  return store
}
