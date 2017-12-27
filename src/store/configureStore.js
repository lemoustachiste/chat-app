import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from '../reducers'
import { ENV } from '../utils/environment'

export default function configureStore ({ initialState = {} }) {
  const middlewares = [thunk]

  if (ENV.debugEnabled) {
    const logger = require('redux-logger')
    middlewares.push(logger.createLogger())
  }

  return createStore(
    combineReducers(reducers),
    initialState,
    applyMiddleware(...middlewares)
  )
}
