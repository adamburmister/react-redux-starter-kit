import * as TestUtils from 'react-addons-test-utils'
import { bindActionCreators } from 'redux'
import { HomeView, IHomeViewProps } from '../../src/views/HomeView'

function shallowRender (component: React.ReactElement<any>): React.ReactElement<any> {
  const renderer = TestUtils.createRenderer()
  renderer.render(component)
  return renderer.getRenderOutput()
}

function renderWithProps (props: IHomeViewProps = {}): React.Component<any, any> {
  return TestUtils.renderIntoDocument(<HomeView {...props} />)
}

function shallowRenderWithProps (props: IHomeViewProps = {}): React.ReactElement<any> {
  return shallowRender(<HomeView {...props} />)
}

describe(`(View) Home`, function() {
  let _component: React.ReactElement<any>,
      _rendered: React.Component<IHomeViewProps, any>,
      _props: IHomeViewProps = {},
      _spies: any = {}

  beforeEach(() => {
    _props = Object.assign(
      {
        counter: 0
      },
      bindActionCreators<IHomeViewProps>(
        {
          onDouble: (_spies.doubleAsync = sinon.spy()),
          onIncrement: (_spies.increment = sinon.spy())
        },
        _spies.dispatch = sinon.spy()
      )
    )

    _component = shallowRenderWithProps(_props)
    _rendered = renderWithProps(_props)
  })

  it('Should render as a <div>.', function () {
    expect(_component.type).to.equal('div')
  })

  it('Should include an <h1> with welcome text.', function () {
    const h1 = TestUtils.findRenderedDOMComponentWithTag(_rendered, 'h1')

    expect(h1).to.exist
    expect(h1.textContent).to.match(/Starter Kit/)
  })

  it('Should render with an <h2> that includes Sample Counter text.', function () {
    const h2 = TestUtils.findRenderedDOMComponentWithTag(_rendered, 'h2')

    expect(h2).to.exist
    expect(h2.textContent).to.match(/Sample Counter/)
  })

  it('Should render props.counter at the end of the sample counter <h2>.', function () {
    const h2 = TestUtils.findRenderedDOMComponentWithTag(
      renderWithProps(Object.assign(_props, { counter: 5 })), 'h2'
    )

    expect(h2).to.exist
    expect(h2.textContent).to.match(/5$/)
  })

  describe('An increment button...', function () {
    let _btn: Element

    beforeEach(() => {
      _btn = TestUtils.scryRenderedDOMComponentsWithTag(_rendered, 'button')
        .filter(a => /Increment/.test(a.textContent))[0]
    })

    it('should be rendered.', function () {
      expect(_btn).to.exist
    })

    it('should dispatch an action when clicked.', function () {
      _spies.dispatch.should.have.not.been.called
      TestUtils.Simulate.click(_btn)
      _spies.dispatch.should.have.been.called
    })
  })

  describe('A Double (Async) button...', function () {
    let _btn: Element

    beforeEach(() => {
      _btn = TestUtils.scryRenderedDOMComponentsWithTag(_rendered, 'button')
        .filter(a => /Double/.test(a.textContent))[0]
    })

    it('should be rendered.', function () {
      expect(_btn).to.exist
    })

    it('should dispatch an action when clicked.', function () {
      _spies.dispatch.should.have.not.been.called
      TestUtils.Simulate.click(_btn)
      _spies.dispatch.should.have.been.called
    })
  })
})
