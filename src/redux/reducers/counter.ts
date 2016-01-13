import { handleActions } from 'redux-actions'
import { ICounterAction, ACTION } from '../actions/counter'

const INITIAL_STATE = 0

export default handleActions({
  [ACTION.INCREMENT_COUNTER]: (state, action: ICounterAction): number => (
    state + action.payload
  ),
  [ACTION.DECREMENT_COUNTER]: (state, action: ICounterAction): number => (
    state - action.payload
  )
}, INITIAL_STATE)
