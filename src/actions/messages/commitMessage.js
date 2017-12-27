import * as ACTIONS from '../../constants/actionTypes'
import { LOCAL_ORIGIN } from '../../constants/messages'
import domain from '../../domain'

const actionMapper = {
  'deleteLast': ACTIONS.DELETE_LAST_MESSAGE,
  'thinking': ACTIONS.THINKING_MESSAGE,
  'setNickname': ACTIONS.SET_NICKNAME
}

export default function commitMessage (text) {
  return (dispatch, getState) => {
    const messageAction = domain.messages.getAction(text)
    let action = ACTIONS.COMMIT_MESSAGE
    let thinking = false

    if (messageAction.length > 0) {
      action = messageAction[0].action
      text = messageAction[0].parsedText
      thinking = actionMapper[action] === ACTIONS.THINKING_MESSAGE
    }

    const message = {
      origin: LOCAL_ORIGIN,
      text,
      ...thinking && { thinking }
    }

    dispatch({
      type: actionMapper[action] || action,
      payload: {
        message
      }
    })

    domain.messages.post(message)
  }
}
