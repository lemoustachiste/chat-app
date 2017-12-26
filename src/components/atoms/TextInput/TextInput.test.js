import React from 'react'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import { KEY } from '../../../constants/keyCodes'
import TextInput from './TextInput'

const noop = () => {}

describe('<TextInput /> test suite', function () {
  describe('callback management', function () {
    describe('when the ENTER key is pressed', function () {
      let onCommitMessageSpy
      let wrapper
      let instance
      let evt

      beforeEach(function () {
        onCommitMessageSpy = sinon.spy()
        wrapper = shallow(<TextInput onCommitMessage={onCommitMessageSpy} />)
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
        onCommitMessageSpy = null
        wrapper = null
        instance = null
        evt = null
      })

      it('should call the onCommitMessage callback provided', function () {
        expect(onCommitMessageSpy.calledOnce).toBe(true)
      })

      it('should call the onCommitMessage callback with the value of the input', function () {
        expect(onCommitMessageSpy.calledWith('this is a test')).toBe(true)
      })

      it('should reset the input value', function () {
        expect(instance.input.value).toBe('')
      })
    })
  })
})
