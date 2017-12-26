import React from 'react'
import { shallow } from 'enzyme'
import Header from './Header'

describe('<Header /> test suite', function () {
  describe('given it receives a userName', function () {
    it('should render the userName', function () {
      const wrapper = shallow(<Header userName='Rob Schneider' />)
      expect(wrapper.text()).toContain('Rob Schneider')
    })
  })
})
