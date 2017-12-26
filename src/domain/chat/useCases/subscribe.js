import chatService from '../'

const events = {
  'receivingExternalMessage': 'emitting chat message'
}

export default function subscribe (event, cb) {
  if (!events[event]) {
    console.error('unknown event: ', event, 'from chat server')
    return
  }
  
  chatService.connection.socket.on(event, function (data) {
    console.log('received some data', data)
    cb(data)
  })
}
