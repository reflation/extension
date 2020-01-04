import { transparent, black } from '../colors'
import { css } from 'linaria'

export const Form = css`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: 93px;
`

export const Input = css`
  padding: 0px 12px;
  border-radius: 18px;
  font-size: 16px;
  line-height: 2;
  background-color: ${transparent};
  ::placeholder {
    color: ${black};
    font-family: 'NanumSquareRound', sans-serif;
  }
`
