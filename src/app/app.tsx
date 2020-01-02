import { h } from 'preact'
import { useReducer } from 'preact/hooks'

import loginReducer, {
  LoginActions,
  initialState,
} from './features/loginReducer'

import { UsernameInput, PasswordInput } from './components/Input'
import { WarningLabel } from './components/Label'
import Submit from './components/Submit'

import { Box } from '../styles/components/Box'
import { Title } from '../styles/components/Title'
import { Form } from '../styles/components/Input'

import {
  formSubmit,
  encodeAccount,
  Result,
  SubmitEvent,
  TargetElements,
} from './features/login'

export default () => {
  const [isWrong, dispath] = useReducer<Result, LoginActions>(
    loginReducer,
    initialState
  )
  const handleSubmit = async (e: SubmitEvent) => {
    e.preventDefault()
    try {
      await requestFromTargetElements(e.target)
    } catch (err) {
      switch (err) {
        case Result.invalid:
          dispath('login/invalid')
        case Result.blocked:
          dispath('login/blocked')
      }
      return
    }
    location.href = 'main.do'
  }

  return (
    <div style={{ ...Box }}>
      <h1 style={{ ...Title }}>로그인</h1>
      <form style={{ ...Form }} onSubmit={handleSubmit}>
        {isWrong !== Result.clear && <WarningLabel result={isWrong} />}
        <UsernameInput />
        <PasswordInput />
        <Submit />
      </form>
    </div>
  )
}

const requestFromTargetElements = (target: TargetElements) => {
  const { student_no, student_pw } = target
  return formSubmit(
    encodeAccount({
      student_no: student_no.value,
      student_pw: student_pw.value,
    })
  )
}
