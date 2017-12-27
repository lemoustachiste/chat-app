import storageService from '../../'

function createArray (length) {
  const array = []
  for (let index = 0; index < length; index++) {
    array.push({
      index
    })
  }

  return array
}

describe('Storage persist use case test suite', function () {
  describe('when called with a message list', function () {
    it('should save the last 10 items in the localStorage', function () {
      const data = {
        messages: createArray(12)
      }
      storageService.persist(data)

      const expectedOutput = data.messages.pop()
      const storedData = JSON.parse(localStorage.__STORE__['messages'])

      expect(storedData.length).toBe(10)
      expect(storedData[storedData.length - 1]).toEqual(expectedOutput)
    })
  })

  describe('when called with a buddy nickname', function () {
    const data = {
      chat: {
        buddy: {
          nickname: 'Will'
        }
      }
    }
    storageService.persist(data)
    const storedData = JSON.parse(localStorage.__STORE__['buddyNickname'])
    expect(storedData).toBe('Will')
  })
})
