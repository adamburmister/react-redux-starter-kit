import '../styles/core.scss'

const CoreLayout = ({children}) => {
  this.propTypes = {
    children: React.PropTypes.element
  }
  return (
    <div className='page-container'>
      <div className='view-container'>
        {children}
      </div>
    </div>
  )
}

export default CoreLayout
