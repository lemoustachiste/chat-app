import React from 'react'
import PropTypes from 'prop-types'
import { SendButton, TextInput } from '../../atoms'

const ChatInput = ({ onSendMessage }) => {
  return (
    <section className='chat-c-chatinput'>
      <TextInput onSendMessage={onSendMessage} />
      <SendButton />
    </section>
  )
}

ChatInput.propTypes = {
  onSendMessage: PropTypes.func
}

export default ChatInput
