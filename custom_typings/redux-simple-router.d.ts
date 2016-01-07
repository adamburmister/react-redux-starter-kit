declare module 'redux-simple-router' {

    export function syncReduxAndRouter(history: any, store: any, selectRouterState?: Function): void;

    export function routeReducer(): any;

}
