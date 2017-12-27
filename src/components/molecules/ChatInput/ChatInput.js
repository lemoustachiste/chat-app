import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { SendButton, TextInput } from '../../atoms'

class ChatInput extends PureComponent {
  constructor () {
    super()
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleButtonClick = this.handleButtonClick.bind(this)
    this.state = {
      inputValue: ''
    }
  }

  handleInputChange (evt) {
    this.setState({
      inputValue: evt.target.value
    })
  }

  handleButtonClick () {
    if (this.state.inputValue.length) {
      this.props.onCommitMessage(this.state.inputValue)
    }
  }

  render () {
    const { onCommitMessage } = this.props

    return (
      <section className='chat-c-chatinput'>
        <TextInput onCommitMessage={onCommitMessage} onInputChange={this.handleInputChange} />
        <SendButton onClick={this.handleButtonClick} />
      </section>
    )
  }
}

ChatInput.propTypes = {
  onCommitMessage: PropTypes.func
}

export default ChatInput
