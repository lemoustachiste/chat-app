export default function setNickname (state, { payload = {} }) {
  return {
    ...state,
    nickname: payload.message.text
  }
}
