import * as ACTIONS from '../../constants/actionTypes'
import { EXTERNAL_ORIGIN, TYPES } from '../../constants/messages'

export default function registerExternalMessage (message) {
  if (message.type === TYPES.NICKNAME) {
    return {
      type: ACTIONS.SET_BUDDY_NICKNAME,
      payload: {
        message
      }
    }
  }
  
  return {
    type: ACTIONS.REGISTER_EXTERNAL_MESSAGE,
    payload: {
      message: {
        ...message,
        origin: EXTERNAL_ORIGIN
      }
    }
  }
}
