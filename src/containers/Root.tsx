import { Provider } from 'react-redux'
import { Router } from 'react-router'
import { IDevTools } from 'redux-devtools'

declare var __DEBUG__: Boolean;
declare var __DEBUG_NEW_WINDOW__: Boolean;

interface IRootProps extends React.Props<Root> {
  history: HistoryModule.History;
  routes: JSX.Element;
  store: Redux.Store;
}

export default class Root extends React.Component<IRootProps, {}> {
  get content () {
    return (
      <Router history={this.props.history}>
        {this.props.routes}
      </Router>
    )
  }

  get devTools () {
    if (__DEBUG__) {
      if (__DEBUG_NEW_WINDOW__) {
        if (!window.devToolsExtension) {
          const createDevToolsWindow = require<Function>('../redux/utils/createDevToolsWindow')
          createDevToolsWindow(this.props.store)
        } else {
          window.devToolsExtension.open()
        }
      } else if (!window.devToolsExtension) {
        const DevTools = require<IDevTools>('containers/DevTools')
        return <DevTools />
      }
    }
  }

  render () {
    return (
      <Provider store={this.props.store}>
        <div style={{ height: '100%' }}>
          {this.content}
          {this.devTools}
        </div>
      </Provider>
    )
  }
}
