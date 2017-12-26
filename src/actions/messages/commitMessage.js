import * as ACTIONS from '../../constants/actionTypes'
import { LOCAL_ORIGIN } from '../../constants/messages'
import domain from '../../domain'

const actionMapper = {
  'deleteLast': ACTIONS.DELETE_LAST_MESSAGE,
  'thinking': ACTIONS.THINKING_MESSAGE
}

export default function commitMessage (text) {
  return (dispatch, getState) => {
    const messageAction = domain.messages.getAction(text)

    const defaultPayloadMessage = {
      origin: LOCAL_ORIGIN,
      text: text
    }

    if (messageAction.length > 0) {
      const action = messageAction[0].action
      return dispatch({
        type: actionMapper[action],
        payload: {
            message: {
            ...defaultPayloadMessage,
            text: messageAction[0].parsedText,
            thinking: actionMapper[action] === ACTIONS.THINKING_MESSAGE
          }
        }
      })
    }

    return dispatch({
      type: ACTIONS.COMMIT_MESSAGE,
      payload: {
        message: defaultPayloadMessage
      }
    })
  }
}
