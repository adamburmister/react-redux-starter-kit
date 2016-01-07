import { combineReducers } from 'redux'
import { routeReducer as router } from 'redux-simple-router'
/* tslint:disable */
import counter from './modules/counter'
/* tslint:enable */

export default combineReducers({
  counter,
  router
})
