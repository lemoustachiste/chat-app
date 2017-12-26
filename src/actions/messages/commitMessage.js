import * as ACTIONS from '../../constants/actionTypes'
import { LOCAL_ORIGIN } from '../../constants/messages'
import domain from '../../domain'

const actionMapper = {
  'deleteLast': ACTIONS.DELETE_LAST_MESSAGE
}

export default function commitMessage (text) {
  return (dispatch, getState) => {
    const messageAction = domain.messages.getAction(text)

    if (messageAction.length > 0) {
      const action = messageAction[0].action
      return dispatch({
        type: actionMapper[action]
      })
    }

    return dispatch({
      type: ACTIONS.COMMIT_MESSAGE,
      payload: {
        message: {
          origin: LOCAL_ORIGIN,
          text
        }
      }
    })
  }
}
