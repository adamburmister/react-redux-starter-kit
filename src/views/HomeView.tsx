/* tslint:disable */
import { connect } from 'react-redux'
import { ACTION as COUNTER_ACTIONS, increment, decrement, doubleAsync } from '../redux/actions/counter'

// Load styles using require to make this valid TypeScript
// https://github.com/TypeStrong/ts-loader#loading-other-resources-and-code-splitting
let styles = require('!style!css!./HomeView.scss');

export interface IHomeViewProps extends React.Props<HomeView> {
  counter?: Number;
  onDouble?: Function;
  onIncrement?: Function;
  onDecrement?: Function;
}

export interface IHomeViewState {
  counter: number
}

// We define mapStateToProps where we'd normally use
// the @connect decorator so the data requirements are clear upfront, but then
// export the decorated component after the main class definition so
// the component can be tested w/ and w/o being connected.
// See: http://rackt.github.io/redux/docs/recipes/WritingTests.html
const mapStateToProps = (state: any): IHomeViewProps => ({
  counter: state.counter
})

// Which action creators does it want to receive by props?
const mapDispatchToProps = (dispatch: Redux.Dispatch) => ({
  onIncrement: () => dispatch(increment(1)),
  onDecrement: () => dispatch(decrement(1)),
  onDouble: () => dispatch(doubleAsync()),
})

// @connect(mapStateToProps, mapDispatchToProps)
export class HomeView extends React.Component<IHomeViewProps, {}> {
  constructor(props: IHomeViewProps) {
    super(props)
  }

  render () {
    return (
      <div className='container text-center'>
        <h1>React Redux TypeScript Starter Kit</h1>
        <h2>
          Counter:&nbsp;
          <span className={styles['counter--green']}>{this.props.counter}</span>
        </h2>
        <button className='btn btn-default'
                onClick={this.props.onIncrement.bind(this)}>
          Increment
        </button>
        <button className='btn btn-default'
                onClick={this.props.onDecrement.bind(this)}>
          Decrement
        </button>
        <button className='btn btn-default'
                onClick={this.props.onDouble.bind(this)}>
          Double it (Async)
        </button>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeView)
