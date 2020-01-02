import { h } from 'preact'
import { User, Lock } from 'preact-feather'

import { Input } from '../../styles/components/Input'
import { darken_ultra, darken_medium } from '../../styles/colors'

const LoginOutside = {
  borderRadius: '18px',
  paddingLeft: '14px',
  paddingRight: '7px',
  paddingTop: '5px',
  paddingBottom: '5px',
  backgroundColor: darken_ultra,
}

const Icon = {
  verticalAlign: 'middle',
  color: darken_medium,
}

export const UsernameInput = () => (
  <div style={{ ...LoginOutside, marginBottom: '16px' }}>
    <User style={{ ...Icon }} />
    <input
      style={{ ...Input }}
      name="student_no"
      placeholder="학번 혹은 교수번호"
    />
  </div>
)

export const PasswordInput = () => (
  <div style={{ ...LoginOutside }}>
    <Lock style={{ ...Icon }} />
    <input
      style={{ ...Input }}
      type="password"
      name="student_pw"
      placeholder="비밀번호"
    />
  </div>
)
