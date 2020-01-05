import { h, Fragment } from 'preact'
import { useEffect } from 'preact/hooks'

import { cx, css } from 'linaria'

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
import Footer from './components/Footer'

export default ({ optOutUrl }: OptOutUrl) => {
  const { isWrong, isKeepLogin, dispatch } = useLoginReducer()

  const handleSubmit = async (e: SubmitEvent) => {
    e.preventDefault()
    try {
      await requestFromTargetElements(e.target)
    } catch (err) {
      switch (err) {
        case Result.invalid:
          dispatch('invalid')
        case Result.blocked:
          dispatch('blocked')
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
    <Fragment>
      <main class={Main}>
        <div class={Card}>
          <h1 class={Title}>로그인</h1>
          <form class={Form} onSubmit={handleSubmit}>
            {isWrong !== Result.clear && <WarningLabel result={isWrong} />}
            <UsernameInput />
            <PasswordInput />
            <Checkbox
              value="로그인 유지"
              checked={isKeepLogin}
              onChange={() => dispatch(!isKeepLogin ? 'keep' : 'unKeep')}
            />
            <Submit />
          </form>
        </div>
      </main>
      <Footer optOutUrl={optOutUrl} />
    </Fragment>
  )
}

const requestFromTargetElements = (target: TargetElements) =>
  submitAndRedirect(getElementValues(target))

const Main = css`
  flex: 1 0 auto;
  justify-content: center;
  display: flex;
  height: 100vh;
  align-items: center;
  padding: 0 0.5rem;
  margin-right: auto;
  margin-left: auto;
`

const Card = cx(
  Box,
  css`
    display: flex;
    justify-content: center;
  `
)

type OptOutUrl = { optOutUrl: string }
