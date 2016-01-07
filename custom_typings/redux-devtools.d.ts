// Type definitions for redux-devtools 3.0.0
declare module 'redux-devtools' {
  export function createDevTools(monitor: any): React.Component<any, any>;
}

declare module 'redux-devtools-log-monitor' {
  export default class LogMonitor extends React.Component<any, any> {
  }
}

declare module 'redux-devtools-dock-monitor' {
  export default class DocMonitor extends React.Component<any, any> {
  }
}
