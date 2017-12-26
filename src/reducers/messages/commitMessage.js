export default function commitMessage (state, { payload = {} }) {
  return {
    ...state,
    messages: [
      ...state.messages,
      payload.message
    ]
  }
}
