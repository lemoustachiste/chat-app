import React from 'react'
import { Header } from '../../atoms'
import { ChatInput, MessageList } from '../../molecules'

const Chatboard = () => {
  return (
    <main className='chat-c-main'>
      <Header />
      <MessageList />
      <ChatInput />
    </main>
  )
}

export default Chatboard
