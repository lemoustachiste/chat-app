import { createStore } from 'redux'
import messagesReducer from '../reducers/messages'

export default function configureStore () {
  return createStore(messagesReducer)
}
