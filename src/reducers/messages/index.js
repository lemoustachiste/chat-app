import * as ACTIONS from '../../constants/actionTypes'
import commitMessage from './commitMessage'
import deleteLastMessage from './deleteLastMessage'

export default function messages (state = {}, action) {
  switch (action.type) {
    case ACTIONS.COMMIT_MESSAGE:
      return commitMessage(state, action)
    
    case ACTIONS.DELETE_LAST_MESSAGE:
      return deleteLastMessage(state, action)
    
    default:
      return state
  }
}
