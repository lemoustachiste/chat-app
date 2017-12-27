import * as ACTIONS from '../../constants/actionTypes'
import setNickname from './setNickname'

export default function chat (state = {}, action) {
  switch (action.type) {
    case ACTIONS.SET_NICKNAME:
      return setNickname(state, action)

    default:
      return state
  }
}
