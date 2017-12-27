import * as ACTIONS from '../../constants/actionTypes'
import domain from '../../domain'

export default function init () {
  return (dispatch) => {
    domain.chat.connect()
    dispatch({
      type: ACTIONS.INIT
    })
  }
}
