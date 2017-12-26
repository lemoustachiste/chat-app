import * as ACTIONS from '../../constants/actionTypes'
import sendMessage from './sendMessage'

export default function messages (state = {}, action) {
  switch (action.type) {
    case ACTIONS.SEND_MESSAGE:
      return sendMessage(state, action)
    
    default:
      return state
  }
}
