import { h } from 'preact'

import { primary } from '../../styles/colors'
import { ExtraBold } from '../../styles/components/Text'

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

const Text = {
  ...ExtraBold,
  color: 'white',
  fontSize: '24px',
  textAlign: 'center',
}

export default () => (
  <button type="submit" style={{ ...Template }}>
    <span style={{ ...Text }}>LOGIN</span>
  </button>
)
