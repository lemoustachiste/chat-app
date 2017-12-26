import * as ACTIONS from '../../constants/actionTypes'
import { LOCAL_ORIGIN } from '../../constants/messages'

export default function sendMessage (text) {
  return {
    type: ACTIONS.SEND_MESSAGE,
    payload: {
      message: {
        origin: LOCAL_ORIGIN,
        text
      }
    }
  }
}
