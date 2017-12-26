import * as ACTIONS from '../../constants/actionTypes'

export default function sendMessage (text) {
  return {
    type: ACTIONS.SEND_MESSAGE,
    payload: {
      message: {
        text
      }
    }
  }
}
