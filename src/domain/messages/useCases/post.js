import chatService from '../../chat'

export default function post (message) {
  chatService.connection.socket.emit('entering chat message', message)
}
