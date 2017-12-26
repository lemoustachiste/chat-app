import { connect } from 'react-redux'
import { getMessages } from '../../../selectors/messages'
import MessageList from './MessageList'

export const mapStateToProps = (state) => {
  return {
    messages: getMessages(state)
  }
}

export default connect(
  mapStateToProps
)(MessageList)
