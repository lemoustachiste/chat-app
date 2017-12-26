import React from 'react'
import PropTypes from 'prop-types'

const SendButton = ({ onSend }) => {
  return (
    <button className='chat-c-button' onClick={onSend}>Send</button>
  )
}

SendButton.propTypes = {
  onSend: PropTypes.func
}

export default SendButton
