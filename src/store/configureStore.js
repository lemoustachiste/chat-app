import { createStore, applyMiddleware } from 'redux'
import messagesReducer from '../reducers/messages'
import { ENV } from '../utils/environment'

export default function configureStore () {
  const middlewares = []
  const preloadedState = {}

  if (ENV.debugEnabled) {
    const logger = require('redux-logger')
    middlewares.push(logger.createLogger())
  }

  return createStore(
    messagesReducer,
    preloadedState,
    applyMiddleware(...middlewares)
  )
}
