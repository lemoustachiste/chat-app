import * as ACTIONS from '../../constants/actionTypes'

export default function updateInitialState (data) {
  return (dispatch) => {
    if (data.messages != null) {
      dispatch({
        type: ACTIONS.UPDATE_MESSAGES,
        payload: {
          messages: data.messages
        }
      })
    }

    dispatch({
      type: ACTIONS.UPDATE_INITIAL_STATE
    })
  }
}
