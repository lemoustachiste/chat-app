import React from 'react'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import { KEY } from '../../../constants/keyCodes'
import TextInput from './TextInput'

const noop = () => {}

describe('<TextInput /> test suite', function () {
  describe('callback management', function () {
    describe('when the ENTER key is pressed', function () {
      let onSendMessageSpy
      let wrapper
      let instance
      let evt

      beforeEach(function () {
        onSendMessageSpy = sinon.spy()
        wrapper = shallow(<TextInput onSendMessage={onSendMessageSpy} />)
        instance = wrapper.instance()
        instance.input = {
          value: 'this is a test'
        }

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
        onSendMessageSpy = null
        wrapper = null
        instance = null
        evt = null
      })

      it('should call the onSendMessage callback provided', function () {
        expect(onSendMessageSpy.calledOnce).toBe(true)
      })

      it('should call the onSendMessage callback with the value of the input', function () {
        expect(onSendMessageSpy.calledWith('this is a test')).toBe(true)
      })

      it('should reset the input value', function () {
        expect(instance.input.value).toBe('')
      })
    })
  })
})
