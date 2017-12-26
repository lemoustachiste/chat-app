import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Message = ({ text, origin }) => {
  const classes = classNames(
    'chat-c-message',
    {
      'chat-c-message--local': true
    }
  )

  return (
    <p className={classes}>
      { text }
    </p>
  )
}

Message.propTypes = {
  text: PropTypes.string,
  origin: PropTypes.string
}

export default Message
