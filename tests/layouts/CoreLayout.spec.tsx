import * as TestUtils from 'react-addons-test-utils'
import { CoreLayout, ICoreLayoutProps } from '../../src/layouts/CoreLayout'

function shallowRender (component: React.ReactElement<any>): React.ReactElement<any> {
  const renderer = TestUtils.createRenderer()
  renderer.render(component)
  return renderer.getRenderOutput()
}

function shallowRenderWithProps (props: ICoreLayoutProps) {
  return shallowRender(<CoreLayout {...props} />)
}

describe('(Layout) Core', function () {
  let _component: React.ReactElement<any>,
      _props: ICoreLayoutProps,
      _child: JSX.Element

  beforeEach(function () {
    _child = <h1 className='child'>Child</h1>
    _props = {
      children: [_child]
    } as ICoreLayoutProps;

    _component = shallowRenderWithProps(_props)
  })

  it('Should render as a <div>.', function () {
    expect(_component.type).to.equal('div')
  })
})
