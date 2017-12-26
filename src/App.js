import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import { ChatBoard } from './components/organisms'

class App extends Component {
  constructor () {
    super()
    this.store = configureStore()
  }

  render() {
    return (
      <Provider store={this.store}>
        <ChatBoard />
      </Provider>
    )
  }
}

export default App
