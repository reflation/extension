import { mainBoxShadow, white } from '../colors'
import { styled } from 'linaria/react'

export const Root = `display: flex; justify-content: center; width: 100vw; height: 100vh; background-color: #F7F7F7`

export const Template = `
  display: flex;
  flex-direction: column;
  box-shadow: 0 19px 32px 20px ${mainBoxShadow};
  background-color: ${white};
`

export const Box = styled.div`
  ${Template}
  width: 430px;
  border-radius: 50px;
  align-self: center;
  padding: 61px 32px 75px 32px;
`
