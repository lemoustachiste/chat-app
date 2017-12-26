import * as ACTIONS from '../../constants/actionTypes'
import { EXTERNAL_ORIGIN } from '../../constants/messages'

export default function registerExternalMessage (message) {
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
