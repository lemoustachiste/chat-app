export default function saveMessage (state, { payload = {} }) {
  return [
    ...state,
    payload.message
  ]
}
