import { createDevTools } from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor'

let DevToolsWindow: React.Component<any, any> = createDevTools(
  <LogMonitor />
)

export default DevToolsWindow
