import { h, Fragment } from 'preact'
import { Regular } from '../../styles/components/Text'

const Wrap = {
  marginTop: '1rem',
  marginLeft: '13px',
}

const Label = {
  ...Regular,
  marginLeft: '13px',
}

export default () => (
  <div style={{ ...Wrap }}>
    <input type="checkbox" />
    <label style={{ ...Label }}>로그인 유지</label>
  </div>
)
