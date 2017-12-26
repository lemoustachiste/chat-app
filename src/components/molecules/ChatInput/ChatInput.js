import React from 'react'
import PropTypes from 'prop-types'
import { SendButton, TextInput } from '../../atoms'

const ChatInput = ({ onCommitMessage }) => {
  return (
    <section className='chat-c-chatinput'>
      <TextInput onCommitMessage={onCommitMessage} />
      <SendButton />
    </section>
  )
}

ChatInput.propTypes = {
  onCommitMessage: PropTypes.func
}

export default ChatInput
