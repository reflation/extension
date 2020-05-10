import { h, JSX } from 'preact'
import { User, Lock, Eye, EyeOff } from 'preact-feather'

import { Input as OriginalInput } from '../../styles/components/Input'
import { darken_ultra, darken_medium, invaild } from '../../styles/colors'
import { css, cx } from 'linaria'
import { styled } from 'linaria/react'
import { useState } from 'preact/hooks'

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

const Pointer = css`
  cursor: pointer;
`

const VerticalAlign = css`
  vertical-align: middle;
`
interface IsWrong {
  isWrong: boolean
}

interface InputProps extends IsWrong {
  onChange: () => void
}

const Input = styled(OriginalInput)`
  flex: 8;
`

export const UsernameInput = ({ isWrong, onChange }: InputProps) => (
  <LoginOutside isWrong={isWrong} style={{ marginBottom: 16 }}>
    <User class={Icon} />
    <Input
      autoFocus
      name="student_no"
      placeholder="학번 혹은 교수번호"
      onChange={onChange}
    />
  </LoginOutside>
)

type InputType = 'password' | 'text'

export const PasswordInput = ({ isWrong, onChange }: InputProps) => {
  const [inputType, setInputType] = useState<InputType>('password')
  const reverse = () =>
    setInputType(inputType === 'password' ? 'text' : 'password')
  return (
    <LoginOutside isWrong={isWrong}>
      <Lock class={Icon} />
      <Input
        type={inputType}
        name="student_pw"
        placeholder="비밀번호"
        onChange={onChange}
      />
      <span class={cx(Icon, Pointer)} onClick={reverse}>
        {inputType === 'password' ? (
          <Eye class={VerticalAlign} />
        ) : (
          <EyeOff class={VerticalAlign} />
        )}
      </span>
    </LoginOutside>
  )
}
