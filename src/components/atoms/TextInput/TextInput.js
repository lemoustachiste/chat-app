import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

const ENTER = 13

class TextInput extends PureComponent {
  constructor () {
    super()
    this.handleKeyDown = this.handleKeyDown.bind(this)
  }

  handleKeyDown (evt) {
    const { keyCode } = evt

    if (keyCode === ENTER) {
      this.props.onSendMessage(evt.target.value)
      evt.stopPropagation()
      evt.preventDefault()
    }
  }

  render () {
    return (
      <input type='text' className='chat-c-textinput' onKeyDown={this.handleKeyDown}/>
    )
  }
}

TextInput.defaultProps = {
  onSendMessage: () => {}
}

TextInput.propTypes = {
  onSendMessage: PropTypes.func
}

export default TextInput
