// Fix a mispelling in the current react-router-redux

/// <reference path="../typings/redux/redux.d.ts" />

declare namespace ReactRouterRedux {
    function routeReducer(state?: any, options?: any): Redux.Reducer;
}
