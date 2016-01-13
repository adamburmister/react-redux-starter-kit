import { createAction } from 'redux-actions'

const DECREMENT_COUNTER = `DECREMENT_COUNTER`
const DOUBLE_COUNTER_ASYNC = `DOUBLE_COUNTER_ASYNC`
const INCREMENT_COUNTER = `INCREMENT_COUNTER`

export class ACTION {
  static DECREMENT_COUNTER = DECREMENT_COUNTER;
  static DOUBLE_COUNTER_ASYNC = DOUBLE_COUNTER_ASYNC;
  static INCREMENT_COUNTER = INCREMENT_COUNTER;
}

export interface ICounterAction {
  type: string;
  payload?: number;
  error?: boolean;
  meta?: any;
}

export const increment = createAction(INCREMENT_COUNTER, (value = 1) => value)
export const decrement = createAction(DECREMENT_COUNTER, (value = 1) => value)

export function doubleAsync(): Redux.ActionCreator {
  return (dispatch: Function, getState: Function) => {
    setTimeout(() => {
      dispatch(increment(getState().counter))
    }, 1000)
  }
}
