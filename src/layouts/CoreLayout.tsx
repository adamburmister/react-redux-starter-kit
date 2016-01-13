require('!style!css!sass!../styles/core.scss')

import RouterNav from '../components/RouterNav'

export interface ICoreLayoutProps {
  children?: Array<JSX.Element>;
}

export class CoreLayout extends React.Component<ICoreLayoutProps, {}> {
  constructor(props: ICoreLayoutProps) {
    super(props)
  }

  render() {
    return (
      <div className='page-container'>
        <RouterNav />

        <div className='view-container'>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default CoreLayout
