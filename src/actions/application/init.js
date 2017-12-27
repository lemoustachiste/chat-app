import * as ACTIONS from '../../constants/actionTypes'
import * as actions from '../'
import { RECEIVING_EXTERNAL_MESSAGE } from '../../constants/chatServerEvents'
import domain from '../../domain'

export default function init () {
  return (dispatch) => {
    domain.chat.connect()
    domain.chat.subscribe(RECEIVING_EXTERNAL_MESSAGE, (data) => {
      dispatch(actions.messages.registerExternalMessage(data))
    })

    dispatch({
      type: ACTIONS.INIT
    })
  }
}
