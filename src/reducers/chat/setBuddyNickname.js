export default function setBuddyNickname (state, { payload = {} }) {
  return {
    ...state,
    buddy: {
      ...state.buddy,
      nickname: payload.message.text
    }
  }
}
