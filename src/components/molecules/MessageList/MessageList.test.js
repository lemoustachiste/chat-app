import React from 'react'
import { shallow } from 'enzyme'
import MessageList from './MessageList'
import { Message } from '../../atoms'

describe('<MessageList /> test suite', function () {
  describe('given it receives messages as props', function () {
    it('should render as many items as their are messages', function () {
      const messages = [
        {
          text: 'yo'
        },
        {
          text: '\'sup?'
        }
      ]

      const wrapper = shallow(<MessageList messages={messages} />)
      expect(wrapper.find(Message).length).toBe(2)
    })
  })
})
