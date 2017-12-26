import React from 'react'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import { KEY } from '../../../constants/keyCodes'
import TextInput from './TextInput'

const noop = () => {}

describe('<TextInput /> test suite', function () {
  describe('callback management', function () {
    describe('when the ENTER key is pressed', function () {
      let onSendTextSpy
      let wrapper
      let evt

      beforeEach(function () {
        onSendTextSpy = sinon.spy()
        wrapper = shallow(<TextInput onSendText={onSendTextSpy} />)
        evt = {
          keyCode: KEY.ENTER,
          stopPropagation: noop,
          preventDefault: noop,
          target: {
            value: 'this is a test'
          }
        }

        wrapper.simulate('keydown', evt)
      })

      afterEach(function () {
        onSendTextSpy = null
        wrapper = null
        evt = null
      })

      it('should call the onSendText callback provided', function () {
        expect(onSendTextSpy.calledOnce).toBe(true)
      })

      it('should call the onSendText callback with the value of the input', function () {
        expect(onSendTextSpy.calledWith('this is a test')).toBe(true)
      })
    })
  })
})
