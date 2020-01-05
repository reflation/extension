import { h } from 'preact'
import { User, Lock } from 'preact-feather'

import { Input } from '../../styles/components/Input'
import { darken_ultra, darken_medium } from '../../styles/colors'
import { css } from 'linaria'
import { styled } from 'linaria/react'

const LoginOutside = styled.div`
  border-radius: 18px;
  padding-left: 14px;
  padding-right: 7px;
  padding-top: 5px;
  padding-bottom: 5px;
  background-color: ${darken_ultra};
`

const Icon = css`
  vertical-align: middle;
  color: ${darken_medium};
`

export const UsernameInput = () => (
  <LoginOutside style={{ marginBottom: 16 }}>
    <User class={Icon} />
    <Input autoFocus name="student_no" placeholder="학번 혹은 교수번호" />
  </LoginOutside>
)

export const PasswordInput = () => (
  <LoginOutside>
    <Lock class={Icon} />
    <Input type="password" name="student_pw" placeholder="비밀번호" />
  </LoginOutside>
)
