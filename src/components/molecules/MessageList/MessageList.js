import React from 'react'
import PropTypes from 'prop-types'
import { Message } from '../../atoms'

const MessageList = ({ messages }) => {
  return (
    <div className='chat-c-message-list'>
      {
        messages.map((message, i) => (
          <div className='chat-c-message-wrapper'>
            <Message {...message} key={`message-${i}`} />
          </div>
        ))
      }
    </div>
  )
}

MessageList.propTypes = {
  messages: PropTypes.array
}

export default MessageList
