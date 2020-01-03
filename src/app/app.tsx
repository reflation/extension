import { h } from 'preact'
import { useReducer, useEffect } from 'preact/hooks'

import {
  saveAccountInfo,
  setKeepLogin,
  submitWhenKeepLogin,
} from './features/localStorage'

import useLoginReducer from './features/loginReducer'

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
  const { isWrong, isKeepLogin, dispatch } = useLoginReducer()

  const handleSubmit = async (e: SubmitEvent) => {
    e.preventDefault()
    try {
      await requestFromTargetElements(e.target)
    } catch (err) {
      switch (err) {
        case Result.invalid:
          dispatch('login/invalid')
        case Result.blocked:
          dispatch('login/blocked')
      }
      return
    }

    if (isKeepLogin) saveAccountInfo(getElementValues(e.target))
  }

  useEffect(() => {
    setKeepLogin(isKeepLogin)
    submitWhenKeepLogin()
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
            dispatch(!isKeepLogin ? 'login/keep' : 'login/unKeep')
          }}
        />
        <Submit />
      </form>
    </div>
  )
}

const requestFromTargetElements = (target: TargetElements) =>
  submitAndRedirect(getElementValues(target))
