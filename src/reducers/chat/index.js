import * as ACTIONS from '../../constants/actionTypes'
import setNickname from './setNickname'
import setBuddyNickname from './setBuddyNickname'

export default function chat (state = {}, action) {
  switch (action.type) {
    case ACTIONS.SET_NICKNAME:
      return setNickname(state, action)
    
    case ACTIONS.SET_BUDDY_NICKNAME:
      return setBuddyNickname(state, action)

    default:
      return state
  }
}
