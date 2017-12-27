export default function deleteLastMessage (state, action) {
  state.pop()

  return [
    ...state
  ]
}
