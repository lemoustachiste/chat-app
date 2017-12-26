import chatService from '../'

export default function emit (message) {
  if (chatService.connection && chatService.connection.socket) {
    chatService.connection.socket.emit('entering chat message', message)
  }
}
