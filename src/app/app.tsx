import { h } from 'preact'

import { UsernameInput, PasswordInput } from './components/Input'
import Submit from './components/Submit'
import CheckBox from './components/CheckBox'

import { Box } from '../styles/components/box'
import { Title } from '../styles/components/Title'
import { Form } from '../styles/components/Input'

export default () => (
  <div style={{ ...Box }}>
    <h1 style={{ ...Title }}>로그인</h1>
    <form style={{ ...Form }}>
      <UsernameInput />
      <PasswordInput />
      <CheckBox />
      <Submit />
    </form>
  </div>
)
