import { createAction, handleActions } from 'redux-actions'
import { MapDispatchToPropsObject } from 'react-redux'

// ------------------------------------
// Constants
// ------------------------------------
export const COUNTER_INCREMENT = 'COUNTER_INCREMENT'
export const COUNTER_DOUBLE = 'COUNTER_DOUBLE'

// ------------------------------------
// Actions
// ------------------------------------
export const increment = createAction<Number>(COUNTER_INCREMENT, (value = 1) => value)

export const doubler = createAction<Number>(COUNTER_DOUBLE, (value = 1) => value * 2)

// This is a thunk, meaning it is a function that immediately
// returns a function for lazy evaluation. It is incredibly useful for
// creating async actions, especially when combined with redux-thunk!
// NOTE: This is solely for demonstration purposes. In a real application,
// you'd probably want to dispatch an action of COUNTER_DOUBLE and let the
// reducer take care of this logic.
// export const doubleAsync: Redux.ActionCreator = () => {
//   return (dispatch: Function, getState: Function) => {
//     setTimeout(() => {
//       dispatch(increment(getState().counter))
//     }, 1000)
//   }
// }

export const actions = {
  increment,
  doubleAsync: doubler
}

// ------------------------------------
// Reducer
// ------------------------------------
export default handleActions<Number>({
  [COUNTER_INCREMENT]: increment,
  [COUNTER_DOUBLE]: doubler
}, 1)
