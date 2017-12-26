import io from 'socket.io-client'

export default function connect () {
  const socket = io('http://localhost:3001')

  socket.on('connect', function () {
    console.log('Connected to chat server')
  })
}
