import { Link } from 'react-router'

export class RouterNav extends React.Component<{}, {}> {
  render () {
    return (
      <ul className='router-nav nav nav-pills'>
        <li>
          <Link to='/' activeClassName='active'>Home</Link>
        </li>
        <li>
          <Link to='/about' activeClassName='active'>About</Link>
        </li>
        <li>
          <Link to='/missing123' activeClassName='active'>404</Link>
        </li>
      </ul>
    )
  }
}

export default RouterNav
