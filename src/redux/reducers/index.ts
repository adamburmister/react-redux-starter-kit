import { combineReducers } from 'redux'
import { routeReducer as router } from 'react-router-redux'

/* tslint:disable:no-unused-variable */
import counter from './counter'

export default combineReducers({
  counter,
  router,
})
