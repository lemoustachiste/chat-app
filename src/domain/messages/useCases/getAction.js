const possibleActions = [
  {
    key: '/oops',
    action: 'deleteLast'
  },
  {
    key: '/think',
    action: 'thinking'
  }
]

export default function getAction (text) {
  return possibleActions.filter(action =>
    text.substr(0, action.key.length) === action.key
  ).map(action => {
    return {
      ...action,
      parsedText: text.substr(action.key.length, text.length).trim()
    }
  })
}
