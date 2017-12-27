import configureStore from '../../../store/configureStore'
import { updateInitialState } from '../'

describe('updateInitialState action creator test suite', function () {
  let initialState
  let store

  beforeEach(function () {
    initialState = {
      messages: [],
      chat: {
        buddy: {}
      }
    }
    store = configureStore({ initialState })
  })

  afterEach(function () {
    initialState = null
    store = null
  })

  describe('given it receives a list of messages', function () {
    it('should update the state with the list', function () {
      const data = {
        messages: [
          {
            text: 'Yo'
          },
          {
            text: 'Whats up?'
          }
        ]
      }

      store.dispatch(updateInitialState(data))

      expect(store.getState().messages.length).toBe(2)
    })
  })

  describe('given it receives a buddy nickname', function () {
    it('should update the state with the nickname', function () {
      const data = {
        buddyNickname: 'Fred'
      }

      store.dispatch(updateInitialState(data))

      expect(store.getState().chat.buddy.nickname).toBe('Fred')
    })
  })
})
