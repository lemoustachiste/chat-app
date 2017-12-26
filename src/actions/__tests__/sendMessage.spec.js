import configureStore from '../../store/configureStore'
import { sendMessage } from '../messages'
import { LOCAL_ORIGIN } from '../../constants/messages'

describe('sendMessage action creator test suite', function () {
  it('should update the state with the new message passed in', function () {
    const initialState = {
      messages: []
    }

    const text = 'Yo, what\'s up?'

    const store = configureStore({ initialState })
    store.dispatch(sendMessage(text))

    const expectedOutput = {
      origin: LOCAL_ORIGIN,
      text
    }

    expect(store.getState().messages.length).toBe(1)
    expect(store.getState().messages[0]).toEqual(expectedOutput)
  })
})
