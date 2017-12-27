import configureStore from '../../../store/configureStore'
import { commitMessage } from '../'
import { LOCAL_ORIGIN, TYPES } from '../../../constants/messages'

describe('commitMessage action creator test suite', function () {
  describe('when it receives a normal message', function () {
    let initialState
    let text
    let store

    beforeEach(function () {
      initialState = {
        messages: []
      }
      text = 'Yo, what\'s up?'
      store = configureStore({ initialState })
      store.dispatch(commitMessage(text))
    })

    afterEach(function () {
      initialState = null
      text = null
      store = null
    })

    it('should update the state with the new message passed in', function () {
      expect(store.getState().messages.length).toBe(1)
    })

    it('should save the correct text for the message', function () {
      expect(store.getState().messages[0].text).toBe(text)
    })

    it('should set the message origin as locally emitted', function () {
      expect(store.getState().messages[0].origin).toBe(LOCAL_ORIGIN)
    })

    it('should set the message type as message', function () {
      expect(store.getState().messages[0].type).toBe(TYPES.MESSAGE)
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

        expect(store.getState().messages[0].thinking).toBe(true)
      })
    })

    describe('when the user wants to set their nickname', function () {
      it('should update the state with the nickname passed in', function () {
        const initialState = {
          chat: {}
        }

        const text = '/nick Will'

        const store = configureStore({ initialState })
        store.dispatch(commitMessage(text))

        expect(store.getState().chat.nickname).toBe('Will')
      })
    })
  })
})
