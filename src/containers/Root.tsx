import { Provider } from 'react-redux'
import { Router } from 'react-router'

declare var __DEBUG__: Boolean;
declare var __DEBUG_NEW_WINDOW__: Boolean;

interface IRootProps extends React.Props<Root> {
  history: HistoryModule.History;
  routes: JSX.Element;
  store: Redux.Store;
}

interface IRootState {
}

export default class Root extends React.Component<IRootProps, IRootState> {
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
          require('../redux/utils/createDevToolsWindow').default(this.props.store)
        } else {
          window.devToolsExtension.open()
        }
      } else if (!window.devToolsExtension) {
        const DevTools = require('containers/DevTools').default
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
