import configureStore from '../../store/configureStore'
import { registerExternalMessage } from '../messages'
import { EXTERNAL_ORIGIN } from '../../constants/messages'

describe('registerExternalMessage action creator test suite', function () {
  describe('when it receives a message', function () {
    it('should update the state with the new message passed in', function () {
      const initialState = {
        messages: []
      }

      const message = {
        text: 'Yo, what\'s up?'
      }

      const store = configureStore({ initialState })
      store.dispatch(registerExternalMessage(message))

      const expectedOutput = {
        origin: EXTERNAL_ORIGIN,
        ...message
      }

      expect(store.getState().messages.length).toBe(1)
      expect(store.getState().messages[0]).toEqual(expectedOutput)
    })
  })
})
