import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as UserActions from './actions'

export function User({name, description}) {
  return (
    <div>
      <h1>{name}</h1>
      <div className="description">{description}</div>
    </div>
  )
}

function mapStateToProps(state) {
  return {...state}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    ...UserActions
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(User)
