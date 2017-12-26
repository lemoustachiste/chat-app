import React from 'react'
import PropTypes from 'prop-types'

const Header = ({ userName }) => {
  const title = `Welcome to the Chat 2000 ${userName}`
  return (
    <header>
      <h1 className='chat-c-header'>{title}</h1>
    </header>
  )
}

Header.defaultProps = {
  userName: ''
}

Header.propTypes = {
  userName: PropTypes.string
}

export default Header
