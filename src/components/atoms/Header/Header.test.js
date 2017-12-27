import React from 'react'
import { shallow } from 'enzyme'
import Header from './Header'

describe('<Header /> test suite', function () {
  describe('given it receives a buddyNickname', function () {
    it('should render the buddyNickname', function () {
      const wrapper = shallow(<Header buddyNickname='Rob Schneider' />)
      expect(wrapper.text()).toContain('Rob Schneider')
    })
  })
})
