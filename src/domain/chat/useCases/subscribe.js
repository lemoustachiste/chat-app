import chatService from '../'
import { RECEIVING_EXTERNAL_MESSAGE } from '../../../constants/chatServerEvents'

const events = {
  [RECEIVING_EXTERNAL_MESSAGE]: 'emitting chat message'
}

export default function subscribe (event, cb) {
  const subscribeEventName = events[event]
  if (!subscribeEventName) {
    console.error('unknown event: ', event, 'from chat server')
    return
  }

  chatService.connection.socket.on(subscribeEventName, function (data) {
    console.log('received some data', data)
    cb(data)
  })
}
