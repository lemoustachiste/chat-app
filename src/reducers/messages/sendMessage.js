export default function sendMessage (state, { payload = {} }) {
  return {
    ...state,
    messages: [
      ...state.messages,
      payload.message
    ]
  }
}
