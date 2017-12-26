import * as ACTIONS from '../../constants/actionTypes'
import saveMessage from './saveMessage'
import deleteLastMessage from './deleteLastMessage'

export default function messages (state = {}, action) {
  switch (action.type) {
    case ACTIONS.COMMIT_MESSAGE:
    case ACTIONS.THINKING_MESSAGE:
    case ACTIONS.REGISTER_EXTERNAL_MESSAGE:
      return saveMessage(state, action)

    case ACTIONS.DELETE_LAST_MESSAGE:
      return deleteLastMessage(state, action)

    default:
      return state
  }
}
