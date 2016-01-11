/// <reference path="../typings/react-router/react-router.d.ts" />

declare module 'redux-simple-router' {

    export function syncReduxAndRouter(history: any, store: any, selectRouterState?: any): void;

    export function routeReducer(): any;

}
