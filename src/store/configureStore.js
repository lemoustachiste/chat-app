import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import messagesReducer from '../reducers/messages'
import { ENV } from '../utils/environment'

export default function configureStore ({ initialState = {} }) {
  const middlewares = [thunk]

  if (ENV.debugEnabled) {
    const logger = require('redux-logger')
    middlewares.push(logger.createLogger())
  }

  return createStore(
    messagesReducer,
    initialState,
    applyMiddleware(...middlewares)
  )
}
