import React from 'react'
import PropTypes from 'prop-types'

const SendButton = ({ onClick }) => {
  return (
    <button className='chat-c-button' onClick={onClick}>Send</button>
  )
}

SendButton.propTypes = {
  onClick: PropTypes.func
}

export default SendButton
