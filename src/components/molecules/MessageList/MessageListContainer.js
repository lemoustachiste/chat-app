import { connect } from 'react-redux'
import { getMessages } from '../../../selectors/messages'
import MessageList from './MessageList'

export const mapStateToProps = (state) => {
  return {
    messages: getMessages(state)
  }
}

export default connect(
  mapStateToProps,
  null,
  null,
  // QUICKFIX: for some reason updating the messages list after a delete does not refresh the component
  // TODO: understand better why it does not rerender...
  {
    pure: false
  }
)(MessageList)
