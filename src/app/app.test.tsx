import { h } from 'preact'

import { mount } from 'enzyme'

// cannot find @jest/globals:
// jest.mock('./features/login')
import useReducer, { State } from './features/loginReducer'

import { Result } from './features/login'

describe('initial mounted login reducer', () => {
  let _state: State

  beforeEach(() => {
    function Comp() {
      const { state } = useReducer()
      _state = state
      return <main />
    }
    mount(<Comp />)
  })

  test('initial state check', () => {
    expect(_state).toEqual({ isWrong: Result.clear, isKeepLogin: false })
  })
})
