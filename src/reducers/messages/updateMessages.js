export default function updateMessages (state, action) {
  return [
    ...state,
    ...action.payload.messages
  ]
}
