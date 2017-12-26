import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../../actions'
import ChatInput from './ChatInput'

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    onCommitMessage: actions.messages.commitMessage
  }, dispatch)
}

export default connect(
  null,
  mapDispatchToProps
)(ChatInput)
