import chatService from '../../chat'

export default function post (message) {
  chatService.emit(message)
}
