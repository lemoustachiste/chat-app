import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { LOCAL_ORIGIN } from '../../../constants/messages'

const Message = ({ text, origin }) => {
  const isLocalMessage = origin === LOCAL_ORIGIN

  const wrapperClasses = classNames(
    'chat-c-message-wrapper',
    {
      'chat-c-message-wrapper--local': isLocalMessage,
    }
  )

  const messageClasses = classNames(
    'chat-c-message',
    'chat-c-bubble',
    {
      'chat-c-message--local': isLocalMessage,
      'chat-c-bubble--local': isLocalMessage,
      'chat-c-bubble--external': !isLocalMessage
    }
  )

  return (
    <div className={wrapperClasses}>
      <p className={messageClasses}>
        { text }
      </p>
    </div>
  )
}

Message.propTypes = {
  text: PropTypes.string,
  origin: PropTypes.string
}

export default Message
