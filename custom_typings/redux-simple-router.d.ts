declare module "redux-simple-router" {

    function syncReduxAndRouter(history: any, store: any, selectRouterState?: Function): void;

    function routeReducer(): any;

}
