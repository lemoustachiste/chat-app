import React from 'react'
import { shallow } from 'enzyme'
import Message from './Message'

describe('<Message/> test suite', function () {
  describe('given it receives a text as a prop', function () {
    it('renders a text', function () {
      const wrapper = shallow(<Message text='this is a test' />)
      expect(wrapper.text()).toContain('this is a test')
    })
  })
})
