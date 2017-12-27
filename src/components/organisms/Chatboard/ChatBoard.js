import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Header } from '../../atoms'
import { ChatInput, MessageList } from '../../molecules'

class ChatBoard extends PureComponent {
  componentWillMount () {
    this.props.onInit()
  }

  render () {
    return (
      <main className='chat-c-main'>
        <Header />
        <MessageList />
        <ChatInput />
      </main>
    )
  }
}

ChatBoard.defaultProps = {
  onInit: () => {}
}

ChatBoard.propTypes = {
  onInit: PropTypes.func
}

export default ChatBoard
