import { ExtraBold } from './Text'
import { css, cx } from 'linaria'

export const Title = cx(
  ExtraBold,
  css`
    font-size: 36px;
    line-height: 1.25em;
    word-break: keep-all;
    align-self: flex-start;
  `
)
