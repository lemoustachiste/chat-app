import * as ACTIONS from '../../constants/actionTypes'
import { LOCAL_ORIGIN, TYPES } from '../../constants/messages'
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
    let type = TYPES.MESSAGE

    if (messageAction.length > 0) {
      action = messageAction[0].action
      text = messageAction[0].parsedText
      thinking = actionMapper[action] === ACTIONS.THINKING_MESSAGE
      type = actionMapper[action] === ACTIONS.SET_NICKNAME ? TYPES.NICKNAME : type
    }

    const message = {
      origin: LOCAL_ORIGIN,
      text,
      ...thinking && { thinking },
      type
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
