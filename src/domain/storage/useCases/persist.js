export default function persist ({ messages, chat }) {
  if (messages) {
    localStorage.setItem('messages', JSON.stringify(messages.slice(-10)))
  }

  if (chat && chat.buddy && chat.buddy.nickname) {
    localStorage.setItem('buddyNickname', chat.buddy.nickname)
  }
}
