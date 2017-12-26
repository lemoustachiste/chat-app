import { mapStateToProps } from './MessageListContainer'

describe('MessageListContainer test suite', function () {
  describe('mapStateToProps method', function () {
    it('should set the messages prop according to what is in the state', function () {
      const messages = [
        {
          text: 'yo'
        },
        {
          text: '\'sup?'
        }
      ]

      const fixtureState = {
        messages
      }

      expect(mapStateToProps(fixtureState).messages).toEqual(messages)
    })
  })
})
