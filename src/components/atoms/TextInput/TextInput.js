import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { KEY } from '../../../constants/keyCodes'

class TextInput extends PureComponent {
  constructor () {
    super()
    this.handleKeyDown = this.handleKeyDown.bind(this)
    this.handleCommitMessage = this.handleCommitMessage.bind(this)
  }

  handleCommitMessage (text) {
    if (!text) {
      return
    }

    this.props.onCommitMessage(text)
    this.resetInputValue()
  }

  handleKeyDown (evt) {
    const { keyCode } = evt

    if (keyCode === KEY.ENTER) {
      this.handleCommitMessage(evt.target.value)
      evt.stopPropagation()
      evt.preventDefault()
    }
  }

  resetInputValue () {
    this.input.value = ''
  }

  render () {
    return (
      <input
        ref={(node) => { this.input = node }}
        type='text'
        className='chat-c-textinput'
        onKeyDown={this.handleKeyDown}
        onChange={this.props.onInputChange}
      />
    )
  }
}

TextInput.defaultProps = {
  onCommitMessage: () => {},
  onInputChange: () => {}
}

TextInput.propTypes = {
  onCommitMessage: PropTypes.func,
  onInputChange: PropTypes.func
}

export default TextInput
