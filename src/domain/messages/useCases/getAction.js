const possibleActions = [
  {
    key: '/oops',
    action: 'deleteLast'
  }
]

export default function getAction (text) {
  return possibleActions.filter(action => {
    return text.substr(0, action.key.length) === action.key
  })
}
