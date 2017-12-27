import configureStore from '../../../store/configureStore'
import { registerExternalMessage } from '../'
import { EXTERNAL_ORIGIN, TYPES } from '../../../constants/messages'

describe('registerExternalMessage action creator test suite', function () {
  describe('when it receives a message', function () {
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

    describe('when the message is of type message', function () {
      let text
      let message

      beforeEach(function () {
        text = 'Yo, what\'s up?'
        message = {
          text,
          type: TYPES.MESSAGE
        }
        store.dispatch(registerExternalMessage(message))
      })

      afterEach(function () {
        text = null
        message = null
      })

      it('should add the message to the message list', function () {
        expect(store.getState().messages.length).toBe(1)
      })

      it('should save the correct text', function () {
        expect(store.getState().messages[0].text).toBe(text)
      })

      it('should set the origin as externally set', function () {
        expect(store.getState().messages[0].origin).toBe(EXTERNAL_ORIGIN)
      })

      it('should save the correct type', function () {
        expect(store.getState().messages[0].type).toBe(TYPES.MESSAGE)
      })
    })

    describe('when the message is of type Nickname', function () {
      let text
      let message

      beforeEach(function () {
        text = 'Will'
        message = {
          text,
          type: TYPES.NICKNAME
        }
        store.dispatch(registerExternalMessage(message))
      })

      afterEach(function () {
        text = null
        message = null
      })

      it('should not save the message in the message list', function () {
        expect(store.getState().messages.length).toBe(0)
      })

      it('should save in the state the other person\'s nickname', function () {
        expect(store.getState().chat.buddy.nickname).toBe('Will')
      })
    })
  })
})
