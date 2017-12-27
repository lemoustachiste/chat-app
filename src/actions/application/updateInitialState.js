import * as ACTIONS from '../../constants/actionTypes'

export default function updateInitialState (data) {
  return (dispatch) => {
    if (data.messages != null && data.messages.length > 0) {
      dispatch({
        type: ACTIONS.UPDATE_MESSAGES,
        payload: {
          messages: data.messages
        }
      })
    }

    if (data.buddyNickname) {
      dispatch({
        type: ACTIONS.SET_BUDDY_NICKNAME,
        payload: {
          message: {
            text: data.buddyNickname
          }
        }
      })
    }

    dispatch({
      type: ACTIONS.UPDATE_INITIAL_STATE
    })
  }
}
