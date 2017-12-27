import React from 'react'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import SendButton from './SendButton'

describe('<SendButton /> test suite', function () {
  describe('callback management', function () {
    describe('when clicking the button', function () {
      it('should call the onClick callback', function () {
        const onClickSpy = sinon.spy()
        const wrapper = shallow(<SendButton onClick={onClickSpy} />)
        wrapper.simulate('click', {})

        expect(onClickSpy.calledOnce).toBe(true)
      })
    })
  })
})
