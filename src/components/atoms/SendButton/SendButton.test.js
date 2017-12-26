import React from 'react'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import SendButton from './SendButton'

describe('<SendButton /> test suite', function () {
  describe('callback management', function () {
    describe('when clicking the button', function () {
      it('should call the onSend callback', function () {
        const onSendSpy = sinon.spy()
        const wrapper = shallow(<SendButton onSend={onSendSpy} />)
        wrapper.simulate('click', {})

        expect(onSendSpy.calledOnce).toBe(true)
      })
    })
  })
})
