import * as ACTIONS from '../../constants/actionTypes'
import { LOCAL_ORIGIN } from '../../constants/messages'

export default function commitMessage (text) {
  return {
    type: ACTIONS.COMMIT_MESSAGE,
    payload: {
      message: {
        origin: LOCAL_ORIGIN,
        text
      }
    }
  }
}
