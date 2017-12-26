import * as ACTIONS from '../../constants/actionTypes'
import commitMessage from './commitMessage'

export default function messages (state = {}, action) {
  switch (action.type) {
    case ACTIONS.COMMIT_MESSAGE:
      return commitMessage(state, action)
    
    default:
      return state
  }
}
