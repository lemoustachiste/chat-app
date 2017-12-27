import configureStore from '../../../store/configureStore'
import { updateInitialState } from '../'

describe('updateInitialState action creator test suite', function () {
  let initialState
  let store

  beforeEach(function () {
    initialState = {
      messages: []
    }
    store = configureStore({ initialState })
  })

  afterEach(function () {
    initialState = null
    store = null
  })

  describe('given it receives a new list of messages', function () {
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
})
