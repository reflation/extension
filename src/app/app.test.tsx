import { h } from 'preact'

import { render } from '@testing-library/preact'

jest.mock('./features/login')

import useReducer, {
  State,
  submitCreator,
  ThunkAction,
} from './features/loginReducer'

import { Status, TargetElements } from './features/login'

import 'dotenv/config'
const { expectUsername, expectPassword } = process.env

const mockTargetElementsCreator = (student_no: string, student_pw: string) =>
  ({
    student_no: { value: student_no },
    student_pw: { value: student_pw },
  } as TargetElements)

describe('initial mounted login reducer', () => {
  let _state: State
  let _dispatch: (action: ThunkAction) => void

  beforeEach(() => {
    function Comp() {
      const { state, dispatch } = useReducer()
      _state = state
      _dispatch = dispatch
      return <div />
    }
    render(<Comp />)
  })

  test('Enter correct student account', async done => {
    const correctStudentAccount = mockTargetElementsCreator(
      expectUsername,
      expectPassword
    )
    await submitCreator(correctStudentAccount)(_dispatch)
    expect(_state).toEqual({ status: Status.correct, isKeepLogin: false })
    done()
  })
  describe('Enter incorrect student account', () => {
    const incorrectStudentAccount = mockTargetElementsCreator(
      expectUsername,
      expectPassword + '1'
    )
    test('once wrong', async done => {
      await submitCreator(incorrectStudentAccount)(_dispatch)
      expect(_state).toEqual({ status: Status.invalid, isKeepLogin: false })
      done()
    })
    test('Login was blocked because it was wrong 5 times', async done => {
      const incorrectStudentAccount = mockTargetElementsCreator(
        expectUsername,
        expectPassword + '1'
      )
      await submitCreator(incorrectStudentAccount)(_dispatch)
      await submitCreator(incorrectStudentAccount)(_dispatch)
      await submitCreator(incorrectStudentAccount)(_dispatch)
      await submitCreator(incorrectStudentAccount)(_dispatch)
      await submitCreator(incorrectStudentAccount)(_dispatch)
      await submitCreator(incorrectStudentAccount)(_dispatch)
      expect(_state).toEqual({ status: Status.blocked, isKeepLogin: false })
      done()
    })
  })
})
