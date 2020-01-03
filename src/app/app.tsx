import { h } from 'preact'
import { useReducer, useEffect } from 'preact/hooks'

import {
  isKeepLoginEnabled,
  saveAccountInfo,
  setKeepLogin,
  submitWhenKeepLogin,
} from './features/localStorage'
import loginReducer, {
  initialState,
  keepLoginReducer,
  LoginActions,
  keepLoginActions,
} from './features/loginReducer'

import { UsernameInput, PasswordInput } from './components/Input'
import { WarningLabel } from './components/Label'
import Submit from './components/Submit'

import { Box } from '../styles/components/Box'
import { Title } from '../styles/components/Title'
import { Form } from '../styles/components/Input'
import { Checkbox } from './components/Checkbox'

import {
  submitAndRedirect,
  Result,
  SubmitEvent,
  TargetElements,
  getElementValues,
} from './features/login'

export default () => {
  const [isWrong, dispathWrong] = useReducer<Result, LoginActions>(
    loginReducer,
    initialState
  )

  const [isKeepLogin, dispatchKeepLogin] = useReducer<
    boolean,
    keepLoginActions
  >(keepLoginReducer, isKeepLoginEnabled())

  const handleSubmit = async (e: SubmitEvent) => {
    e.preventDefault()
    try {
      await requestFromTargetElements(e.target)
    } catch (err) {
      switch (err) {
        case Result.invalid:
          dispathWrong('login/invalid')
        case Result.blocked:
          dispathWrong('login/blocked')
      }
      return
    }

    if (isKeepLogin) saveAccountInfo(getElementValues(e.target))
  }

  useEffect(() => {
    setKeepLogin(isKeepLogin)
    submitWhenKeepLogin(isKeepLogin)
  }, [isKeepLogin])

  return (
    <div style={{ ...Box }}>
      <h1 style={{ ...Title }}>로그인</h1>
      <form style={{ ...Form }} onSubmit={handleSubmit}>
        {isWrong !== Result.clear && <WarningLabel result={isWrong} />}
        <UsernameInput />
        <PasswordInput />
        <Checkbox
          value="로그인 유지"
          checked={isKeepLogin}
          onChange={e => {
            dispatchKeepLogin(!isKeepLogin ? 'login/keep' : 'login/unKeep')
          }}
        />
        <Submit />
      </form>
    </div>
  )
}

const requestFromTargetElements = (target: TargetElements) =>
  submitAndRedirect(getElementValues(target))
