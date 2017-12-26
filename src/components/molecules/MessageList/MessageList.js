import React from 'react'
import PropTypes from 'prop-types'
import { Message } from '../../atoms'

const MessageList = ({ messages }) => {
  return (
    <div>
      {
        messages.map((message, i) => (
          <Message {...message} key={`message-${i}`} />
        ))
      }
    </div>
  )
}

MessageList.propTypes = {
  messages: PropTypes.array
}

export default MessageList
