import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Header } from '../atoms/'
import { ChatInput } from '../molecules/'

class Chatboard extends Component {
  render () {
    return (
      <main className='chat-c-main'>
        <Header />
        <ChatInput />
      </main>
    )
  }
}

export default Chatboard
