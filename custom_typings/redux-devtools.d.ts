/// <reference path='../typings/react/react.d.ts' />
/// <reference path='../typings/redux/redux.d.ts' />

// Type definitions for redux-devtools 3.0.0
// Project: https://github.com/gaearon/redux-devtools
// Definitions by: Petryshyn Sergii <https://github.com/mc-petry>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'redux-devtools' {
  import * as React from 'react'

  interface IDevTools {
    new (): JSX.ElementClass
    instrument(): Function
  }

  export function createDevTools(el: React.ReactElement<any>): IDevTools
  export function persistState(debugSessionKey: string): Function

  var factory: { instrument(): Function }

  export default factory;
}
