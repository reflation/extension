import { h } from 'preact'
import { User, Lock } from 'preact-feather'

import { Input } from '../../styles/components/Input'
import { darken_ultra, darken_medium } from '../../styles/colors'
import { css, cx } from 'linaria'

const LoginOutside = css`
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
  <div
    class={cx(
      LoginOutside,
      css`
        margin-bottom: 16px;
      `
    )}
  >
    <User class={Icon} style={{}} />
    <input
      class={Input}
      autoFocus
      name="student_no"
      placeholder="학번 혹은 교수번호"
    />
  </div>
)

export const PasswordInput = () => (
  <div class={LoginOutside}>
    <Lock class={Icon} />
    <input
      class={Input}
      type="password"
      name="student_pw"
      placeholder="비밀번호"
    />
  </div>
)
