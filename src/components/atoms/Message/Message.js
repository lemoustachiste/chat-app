import React from 'react'
import PropTypes from 'prop-types'

const Message = ({ text }) => {
  return (
    <p className='chat-c-message'>
      { text }
    </p>
  )
}

Message.propTypes = {
  text: PropTypes.string
}

export default Message
