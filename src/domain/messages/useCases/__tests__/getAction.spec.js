import messageService from '../../'

describe('Messages getAction domain use case', function () {
  describe('given it receives a message with a recognizable action', function () {
    it('should return the action object', function () {
      const message = '/oops'
      expect(messageService.getAction(message).length).toBe(1)
    })
  })

  describe('given it receives a message with no recognizable action', function () {
    it('should return an empty array', function () {
      const message = 'no action'
      expect(messageService.getAction(message).length).toBe(0)
    })
  })
})
