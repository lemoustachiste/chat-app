import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Message = ({ text, origin }) => {
  const wrapperClasses = classNames(
    'chat-c-message-wrapper',
    {
      'chat-c-message-wrapper--local': true
    }
  )

  const messageClasses = classNames(
    'chat-c-message',
    'chat-c-bubble',
    {
      'chat-c-message--local': true,
      'chat-c-bubble--local': true
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
