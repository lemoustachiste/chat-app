import { mapStateToProps } from './HeaderContainer'

describe('HeaderContainer test suite', function () {
  describe('mapStateToProps method', function () {
    it('should set the buddyNickname prop according to what is in the state', function () {
      const buddy = {
        nickname: 'Will'
      }

      const fixtureState = {
        chat: {
          buddy
        }
      }

      expect(mapStateToProps(fixtureState).buddyNickname).toEqual(buddy.nickname)
    })
  })
})
