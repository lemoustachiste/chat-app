import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { configureStore, getInitialState } from './store'
import { ChatBoard } from './components/organisms'
import domain from './domain'
require('./css/bundle.css')

class App extends Component {
  constructor () {
    super()
    const initialState = getInitialState()
    this.store = configureStore({ initialState })
    this.store.subscribe(() => {
      const newState = this.store.getState()
      domain.storage.persist(newState)
    })
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
