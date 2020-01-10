import { h, JSX } from 'preact'
import { User, Lock } from 'preact-feather'

import { Input as OriginalInput } from '../../styles/components/Input'
import { darken_ultra, darken_medium, invaild } from '../../styles/colors'
import { css } from 'linaria'
import { styled } from 'linaria/react'

const LoginOutside = styled.div<IsWrong & JSX.HTMLAttributes<HTMLDivElement>>`
  display: flex;
  border-radius: 18px;
  padding-top: 5px;
  padding-bottom: 5px;
  background-color: ${darken_ultra};
  box-shadow: 0 0 0 2px ${props => (props.isWrong ? invaild.outside : '')};
  border: solid 1px ${props => (props.isWrong ? invaild.inside : '')};
`

const Icon = css`
  flex: 1;
  align-self: center;
  color: ${darken_medium};
`

type IsWrong = { isWrong: boolean }

const Input = styled(OriginalInput)`
  flex: 9;
`

export const UsernameInput = ({ isWrong }: IsWrong) => (
  <LoginOutside isWrong={isWrong} style={{ marginBottom: 16 }}>
    <User class={Icon} />
    <Input autoFocus name="student_no" placeholder="학번 혹은 교수번호" />
  </LoginOutside>
)

export const PasswordInput = ({ isWrong }: IsWrong) => (
  <LoginOutside isWrong={isWrong}>
    <Lock class={Icon} />
    <Input type="password" name="student_pw" placeholder="비밀번호" />
  </LoginOutside>
)
