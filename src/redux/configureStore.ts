import thunk from 'redux-thunk'
import rootReducer from './rootReducer'
import DevTools from '../containers/DevTools'

import {
  applyMiddleware,
  compose,
  createStore
} from 'redux'

declare var __DEBUG__: Boolean;
declare var module: any;

export default function configureStore (initialState: Object) {
  let createStoreWithMiddleware: Function
  const middleware: Function = applyMiddleware(thunk)

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
    module.hot.accept('./rootReducer', () => {
      const nextRootReducer = require('./rootReducer') // ES6 module (AB: TODO: Is this an issue in TS?)
      store.replaceReducer(nextRootReducer)
    })
  }
  return store
}
