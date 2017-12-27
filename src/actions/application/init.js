import * as ACTIONS from '../../constants/actionTypes'
import * as actions from '../'
import { RECEIVING_EXTERNAL_MESSAGE } from '../../constants/chatServerEvents'
import domain from '../../domain'

const storedProperties = [
  'messages',
  'buddyNickname'
]

function updateStateFromStorage(dispatch) {
  const retrievedDataFromStorage = readFromStorage()

  if (Object.keys(retrievedDataFromStorage).length > 0) {
    dispatch(actions.application.updateInitialState(retrievedDataFromStorage))
  }
}

function readFromStorage () {
  return storedProperties.reduce((acc, key) => {
    const value = domain.storage.read(key)

    if (value != null) {
      acc[key] = value
    }

    return acc
  }, {})
}

export default function init () {
  return (dispatch) => {
    domain.chat.connect()
    domain.chat.subscribe(RECEIVING_EXTERNAL_MESSAGE, (data) => {
      dispatch(actions.messages.registerExternalMessage(data))
    })

    updateStateFromStorage(dispatch)

    dispatch({
      type: ACTIONS.INIT
    })
  }
}
