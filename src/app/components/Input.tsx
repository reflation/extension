import { h, JSX } from 'preact'
import { User, Lock, Eye, EyeOff } from 'preact-feather'

import { Input as OriginalInput } from '../../styles/components/Input'
import { darken_ultra, darken_medium, invaild } from '../../styles/colors'
import { css } from 'linaria'
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

const LeftIcon = css`
  flex: 1;
  align-self: center;
  color: ${darken_medium};
`

const RightIcon = styled.span`
  flex: 1;
  align-self: center;
  cursor: pointer;
  color: ${darken_medium};
`

const RightIconInner = css`
  vertical-align: middle;
`

type IsWrong = { isWrong: boolean }

const Input = styled(OriginalInput)`
  flex: 8;
`

export const UsernameInput = ({ isWrong }: IsWrong) => (
  <LoginOutside isWrong={isWrong} style={{ marginBottom: 16 }}>
    <User class={LeftIcon} />
    <Input autoFocus name="student_no" placeholder="학번 혹은 교수번호" />
  </LoginOutside>
)

type InputType = 'password' | 'text'

export const PasswordInput = ({ isWrong }: IsWrong) => {
  const [inputType, setInputType] = useState<InputType>('password')
  const inverse = () =>
    setInputType(inputType === 'password' ? 'text' : 'password')
  return (
    <LoginOutside isWrong={isWrong}>
      <Lock class={LeftIcon} />
      <Input type={inputType} name="student_pw" placeholder="비밀번호" />
      <RightIcon onClick={inverse}>
        {inputType === 'password' ? (
          <Eye class={RightIconInner} />
        ) : (
          <EyeOff class={RightIconInner} />
        )}
      </RightIcon>
    </LoginOutside>
  )
}
