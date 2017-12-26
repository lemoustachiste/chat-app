import sinon from 'sinon'
import chatService from '../../'

describe('Chat emit use case test suite', function () {
  let emitSpy
  let mockSocket
  let fixtureMessage

  beforeEach(function () {
    emitSpy = sinon.spy()
    mockSocket = {
      emit: emitSpy
    }
    fixtureMessage = {
      text: 'test'
    }
  })

  afterEach(function () {
    emitSpy = null
    mockSocket = null
    fixtureMessage = null
  })

  describe('when the connection to the socket has been registered', function () {
    it('should emit the message passed in', function () {
      chatService.connection = chatService.register(mockSocket)
      chatService.emit(fixtureMessage)

      expect(emitSpy.getCalls()[0].args[1]).toEqual(fixtureMessage)
    })
  })

  describe('when the connection to the socket has not been registered', function () {
    it('should not emit the message passed in', function () {
      chatService.emit(fixtureMessage)

      expect(emitSpy.calledOnce).toBe(false)
    })
  })
})
