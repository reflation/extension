import { h, JSX } from 'preact'
import { Regular } from '../../styles/components/Text'
import { cx, css } from 'linaria'

const Wrap = css`
  margin-top: 1rem;
  margin-left: 13px;
`

const Label = cx(
  Regular,
  css`
    margin-left: 13px;
  `
)

export const Checkbox = (props: Props) => (
  <div class={Wrap}>
    <input {...props} type="checkbox" />
    <label class={Label}>{props.value}</label>
  </div>
)

type Props = {
  value: string
  onChange: (e: JSX.TargetedEvent<HTMLInputElement, Event>) => void
  checked: boolean
}
