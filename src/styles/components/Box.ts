import { css } from 'linaria'
import { mainBoxShadow, white } from '../colors'

export const Root = `display: flex; justify-content: center; width: 100vw; height: 100vh; background-color: #F7F7F7`

export const Template = `
  display: flex;
  flex-direction: column;
  box-shadow: 15px 19px 32px -18px ${mainBoxShadow};
  background-color: ${white};
`

export const Box = css`
  ${Template}
  width: 430px;
  border-radius: 15px;
  align-self: center;
  padding: 61px 32px 91px 32px;
`
