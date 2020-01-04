import { h, JSX } from 'preact'
import { Regular } from '../../styles/components/Text'

const Wrap = {
  marginTop: '1rem',
  marginLeft: '13px',
}

const Label = {
  ...Regular,
  marginLeft: '13px',
}

export const Checkbox = (props: Props) => (
  <div style={{ ...Wrap }}>
    <input {...props} type="checkbox" />
    <label style={{ ...Label }}>{props.value}</label>
  </div>
)

type Props = {
  value: string
  onChange: (e: JSX.TargetedEvent<HTMLInputElement, Event>) => void
  checked: boolean
}
