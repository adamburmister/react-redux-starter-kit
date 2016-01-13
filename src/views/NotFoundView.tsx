export class NotFound extends React.Component<{}, {}> {
  render () {
    return (
      <div className='container text-center'>
        <h1>Not Found</h1>
        <p>This view renders for all non-matching routes.</p>
      </div>
    )
  }
}

export default NotFound
