import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../../actions'
import ChatInput from './ChatInput'

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    onSendMessage: actions.messages.sendMessage
  }, dispatch)
}

export default connect(
  null,
  mapDispatchToProps
)(ChatInput)
