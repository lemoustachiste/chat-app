import { Socket } from '../valueObjects'

export default function register (socket) {
  return new Socket(socket)
}
