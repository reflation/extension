import { h } from 'preact'

import { UsernameInput, PasswordInput } from './components/Input'
import Submit from './components/Submit'
import { KeepLoginCheckbox } from './components/Checkbox'

import { Box } from '../styles/components/Box'
import { Title } from '../styles/components/Title'
import { Form } from '../styles/components/Input'

export default () => (
  <div style={{ ...Box }}>
    <h1 style={{ ...Title }}>로그인</h1>
    <form style={{ ...Form }}>
      <UsernameInput />
      <PasswordInput />
      <KeepLoginCheckbox />
      <Submit />
    </form>
  </div>
)
