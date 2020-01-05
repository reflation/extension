import { h } from 'preact'

import { primary } from '../../styles/colors'
import { ExtraBold } from '../../styles/components/Text'
import { styled } from 'linaria/react'

const SubmitButton = styled.button`
  height: 50px;
  border-radius: 27px;
  background-color: ${primary};
  margin-top: 19px;
  padding: 0 42px;
  cursor: pointer;
  width: 178px;
  align-self: center;
`

const Text = styled.span`
  ${ExtraBold}
  color: white;
  font-size: 24px;
  text-align: center;
`

export default () => (
  <SubmitButton type="submit">
    <Text>LOGIN</Text>
  </SubmitButton>
)
