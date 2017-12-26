import { getMessages } from '../../selectors/messages'

export default function deleteLastMessage (state, action) {
  const messages = getMessages(state)
  messages.pop()

  return {
    ...state,
    messages
  }
}
