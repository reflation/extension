import { h, JSX } from 'preact'
import { Regular } from '../../styles/components/Text'
import { styled } from 'linaria/react'

const Wrap = styled.div`
  margin-top: 1rem;
  margin-left: 13px;
`

const Label = styled.label`
  ${Regular}
  margin-left: 13px;
`

export const Checkbox = (props: Props) => (
  <Wrap>
    <input {...props} type="checkbox" />
    <Label>{props.value}</Label>
  </Wrap>
)

type Props = {
  value: string
  onChange: (e: JSX.TargetedEvent<HTMLInputElement, Event>) => void
  checked: boolean
}
