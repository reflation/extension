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
  box-shadow: 0 10px 24px 0 ${primary};
  transition: box-shadow 0.2s ease-in-out;
  :hover {
    box-shadow: 0 3px 10px 0 ${primary};
  }
`

const Text = styled.span`
  ${ExtraBold}
  color: white;
  font-size: 24px;
  text-align: center;
`

export const Submit = () => (
  <SubmitButton type="submit">
    <Text>LOGIN</Text>
  </SubmitButton>
)
