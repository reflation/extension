import { h } from 'preact'

import { primary } from '../../styles/colors'
import { ExtraBold } from '../../styles/components/Text'
import { css, cx } from 'linaria'

const Template = {
  height: '50px',
  borderRadius: '27px',
  backgroundColor: primary,
  marginTop: '19px',
  padding: '0 42px',
  cursor: 'pointer',
  width: '178px',
  alignSelf: 'center',
}

const Text = css`
  color: white;
  font-size: 24px;
  text-align: center;
`

export default () => (
  <button type="submit" style={{ ...Template }}>
    <span class={cx(ExtraBold, Text)}>LOGIN</span>
  </button>
)
