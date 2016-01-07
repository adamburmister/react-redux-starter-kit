/// <reference path="../typings/redux/redux.d.ts" />

declare module ReduxActions {
    // FSA-compliant action.
    // See: https://github.com/acdlite/flux-standard-action
    type Action = {
        type: string
        payload?: any
        error?: boolean
        meta?: any
    };

    type PayloadCreator<T> = (...args: any[]) => T;
    type MetaCreator = (...args: any[]) => any;

    type Reducer<T> = (state: T, action: Action) => T;

    type ReducerMap<T> = {
        [actionType: string]: Reducer<T>
    };

    export function createAction<T>(actionType: string, payloadCreator?: PayloadCreator<T>, metaCreator?: MetaCreator): Redux.ActionCreator;

    export function handleAction<T>(actionType: string, reducer: Reducer<T> | ReducerMap<T>): Reducer<T>;

    export function handleActions<T>(reducerMap: ReducerMap<T>, initialState?: T): Reducer<T>;
}

declare module 'redux-actions' {
    export = ReduxActions;
}

