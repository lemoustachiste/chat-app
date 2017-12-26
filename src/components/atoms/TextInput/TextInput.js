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
      this.props.onSendText(evt.target.value)
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
  onSendText: () => {}
}

TextInput.propTypes = {
  onSendText: PropTypes.func
}

export default TextInput
