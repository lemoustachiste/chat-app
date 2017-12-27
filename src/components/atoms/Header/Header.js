import React from 'react'
import PropTypes from 'prop-types'

const Header = ({ buddyNickname }) => {
  const title = !!buddyNickname ? `Chat with ${buddyNickname}` : 'Welcome to the Chat 2000'
  return (
    <header>
      <h1 className='chat-c-header'>{title}</h1>
    </header>
  )
}

Header.defaultProps = {
  buddyNickname: ''
}

Header.propTypes = {
  buddyNickname: PropTypes.string
}

export default Header
