import { connect } from 'react-redux'
import { getMessages } from '../../../selectors/messages'
import MessageList from './MessageList'

export const mapStateToProps = (state) => {
  // TODO: actually put this in the state
  state.messages = state.messages || [
    {
      author: 'local',
      nickName: 'Rob Schneider',
      text: 'Hello, how are you?'
    },
    {
      author: 'external',
      nickName: 'anon',
      text: 'Fine and you'
    },
    {
      author: 'local',
      nickName: 'Rob Schneider',
      text: 'Do you like cheese?'
    },
    {
      author: 'external',
      nickName: 'anon',
      text: 'Yes'
    },
    {
      author: 'local',
      nickName: 'Rob Schneider',
      text: 'Which ones?'
    },
    {
      author: 'local',
      nickName: 'Rob Schneider',
      text: 'Comté?'
    },
    {
      author: 'local',
      nickName: 'Rob Schneider',
      text: 'Cheddar?'
    },
    {
      author: 'local',
      nickName: 'Rob Schneider',
      text: 'Mont d\'or?'
    },
    {
      author: 'local',
      nickName: 'Rob Schneider',
      text: 'Morbier?'
    },
    {
      author: 'external',
      nickName: 'anon',
      text: 'k bye'
    }
  ]

  return {
    messages: getMessages(state)
  }
}

export default connect(
  mapStateToProps
)(MessageList)
