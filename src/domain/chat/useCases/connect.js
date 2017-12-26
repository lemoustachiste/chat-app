import io from 'socket.io-client'
import chatService from '../'

export default function connect () {
  const socket = io('http://localhost:3001')

  chatService.connection = chatService.register(socket)

  socket.on('connect', function () {
    console.log('Connected to chat server')

    socket.on('emitting chat message', function (data) {
      console.log('received some data', data)
    })
  })
}
