import { h, Fragment } from 'preact'
import { useEffect } from 'preact/hooks'

import { styled } from 'linaria/react'

import {
  saveAccountInfo,
  setKeepLogin,
  submitWhenKeepLogin,
} from './features/localStorage'

import useLoginReducer, {
  KEEP,
  UNKEEP,
  submitCreator,
} from './features/loginReducer'

import { UsernameInput, PasswordInput } from './components/Input'
import { WarningLabel } from './components/Label'
import Submit from './components/Submit'

import { Box } from '../styles/components/Box'
import { Title } from '../styles/components/Title'
import { Form } from '../styles/components/Input'
import { LabeledCheckbox } from './components/Checkbox'

import { Status, SubmitEvent, getElementValues } from './features/login'
import Footer from './components/Footer'

export default ({ optOutUrl }: OptOutUrl) => {
  const {
    state: { status, isKeepLogin },
    dispatch,
  } = useLoginReducer()

  const isWrong = [Status.invalid, Status.blocked].includes(status)

  const handleSubmit = async (e: SubmitEvent) => {
    e.preventDefault()
    dispatch(submitCreator(e.target))
    if (status === Status.correct && isKeepLogin) {
      saveAccountInfo(getElementValues(e.target))
    }
  }

  useEffect(() => {
    setKeepLogin(isKeepLogin)
    submitWhenKeepLogin()
  }, [isKeepLogin])

  return (
    <Fragment>
      <Main>
        <Card>
          <Title>로그인</Title>
          <Form onSubmit={handleSubmit}>
            {status === Status.blocked && <WarningLabel />}
            <UsernameInput isWrong={isWrong} />
            <PasswordInput isWrong={isWrong} />
            <LabeledCheckbox
              value="로그인 유지"
              checked={isKeepLogin}
              onChange={() => dispatch(!isKeepLogin ? KEEP : UNKEEP)}
            />
            <Submit />
          </Form>
        </Card>
      </Main>
      <Footer optOutUrl={optOutUrl} />
    </Fragment>
  )
}

const Main = styled.main`
  flex: 1 0 auto;
  justify-content: center;
  display: flex;
  height: 100vh;
  align-items: center;
  padding: 0 0.5rem;
  margin-right: auto;
  margin-left: auto;
`

const Card = styled(Box)`
  display: flex;
  justify-content: center;
`

type OptOutUrl = { optOutUrl: string }
