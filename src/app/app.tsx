import { h, Fragment } from 'preact'
import { useEffect } from 'preact/hooks'

import { styled } from 'linaria/react'

import {
  saveAccountInfo,
  setKeepLogin,
  submitWhenKeepLogin,
} from './features/localStorage'

import useLoginReducer, {
  submitCreator,
  keepCreator,
  IDLE,
} from './features/loginReducer'

import LabeledCheckbox from './components/Checkbox'
import { UsernameInput, PasswordInput } from './components/Input'
import { WarningLabel, FindPassword } from './components/Label'
import { Submit } from './components/Submit'

import { Box } from '../styles/components/Box'
import { Title } from '../styles/components/Title'
import { Form } from '../styles/components/Input'

import { Result, SubmitEvent, getElementValues } from './features/login'
import Footer from './components/Footer'

export default function App({ optOutUrl }: OptOutUrl) {
  const {
    state: { result, isKeepLogin },
    dispatch,
  } = useLoginReducer()

  const isWrong = result === Result.invalid || result === Result.blocked

  const handleSubmit = async (e: SubmitEvent) => {
    e.preventDefault()
    dispatch(submitCreator(e.target))
    if (isKeepLogin) saveAccountInfo(getElementValues(e.target))
  }

  useEffect(() => {
    setKeepLogin(isKeepLogin)
    submitWhenKeepLogin()
  }, [isKeepLogin])

  useEffect(() => {
    if (
      result === Result.idle ||
      result === Result.invalid ||
      result === Result.blocked
    ) {
      // prettier-ignore
      return
    }

    if (result === Result.correct) {
      location.href = 'main.do'
      return
    }

    if (result === Result.changePassword) {
      location.href = 'sysUserPwd.do?changepw=y'
      return
    }

    throw Error(
      `Unexpect result flow in handleSubmit' current value: ${Result[result]}`
    )
  }, [result])

  const onChange = () => {
    if (isWrong) dispatch(IDLE)
  }

  return (
    <Fragment>
      <Main>
        <Card>
          <Title>로그인</Title>
          <Form onSubmit={handleSubmit}>
            <WarningLabel isBlocked={result === Result.blocked} />
            <UsernameInput isWrong={isWrong} onChange={onChange} />
            <PasswordInput isWrong={isWrong} onChange={onChange} />
            <LabeledCheckbox
              value="로그인 유지"
              checked={isKeepLogin}
              onChange={() => dispatch(keepCreator(!isKeepLogin))}
            />
            <Submit />
            <FindPassword />
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

interface OptOutUrl {
  optOutUrl: string
}
