import { combineReducers } from 'redux'
import { routeReducer as router } from 'redux-simple-router'

/* tslint:disable:no-unused-variable */
import counter from './counter'

export default combineReducers({
  counter,
  router,
})
