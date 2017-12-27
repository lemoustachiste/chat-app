const getChat = state => state.chat
const getBuddy = state => getChat(state).buddy
export const getBuddyNickname = state => getBuddy(state).nickname || ''
