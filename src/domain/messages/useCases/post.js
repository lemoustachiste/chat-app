import chatService from '../../chat'

export default function post (message) {
  if (chatService.connection && chatService.connection.socket) {
    chatService.connection.socket.emit('entering chat message', message)
  }
}
