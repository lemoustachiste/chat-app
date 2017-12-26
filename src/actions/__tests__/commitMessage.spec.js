import configureStore from '../../store/configureStore'
import { commitMessage } from '../messages'
import { LOCAL_ORIGIN } from '../../constants/messages'

describe('commitMessage action creator test suite', function () {
  describe('when it receives a normal message', function () {
    it('should update the state with the new message passed in', function () {
      const initialState = {
        messages: []
      }

      const text = 'Yo, what\'s up?'

      const store = configureStore({ initialState })
      store.dispatch(commitMessage(text))

      const expectedOutput = {
        origin: LOCAL_ORIGIN,
        text
      }

      expect(store.getState().messages.length).toBe(1)
      expect(store.getState().messages[0]).toEqual(expectedOutput)
    })
  })

  describe('when it receives a message which has a business action', function () {
    describe('when the user wants to delete the last message', function () {
      it('should delete the last message', function () {
        const initialState = {
          messages: [{
            text: 'Yo, what\'s up?'
          }, {
            text:'just chilling'
          }]
        }

        const text = '/oops'

        const store = configureStore({ initialState })
        store.dispatch(commitMessage(text))
        expect(store.getState().messages.length).toBe(1)
        expect(store.getState().messages[0]).toEqual(initialState.messages[0])
      })
    })

    describe('when the user is thinking', function () {
      it('should set the message as such', function () {
        const initialState = {
          messages: []
        }

        const text = '/think I wonder why Alice didn\'t ask for coffee'

        const store = configureStore({ initialState })
        store.dispatch(commitMessage(text))

        const expectedOutput = {
          origin: LOCAL_ORIGIN,
          thinking: true,
          text: 'I wonder why Alice didn\'t ask for coffee'
        }

        expect(store.getState().messages[0]).toEqual(expectedOutput)
      })
    })
  })
})
