export default function saveMessage (state, { payload = {} }) {
  return {
    ...state,
    messages: [
      ...state.messages,
      payload.message
    ]
  }
}
