import { h } from 'preact'
import { Regular } from '../../styles/components/Text'

const Wrap = {
  marginTop: '1rem',
  marginLeft: '13px',
}

const Label = {
  ...Regular,
  marginLeft: '13px',
}

const Checkbox = ({ label }: { label: string }) => (
  <div style={{ ...Wrap }}>
    <input type="checkbox" />
    <label style={{ ...Label }}>{label}</label>
  </div>
)

export const KeepLoginCheckbox = () => <Checkbox label="로그인 유지" />
