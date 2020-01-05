import { h, JSX } from 'preact'
import { Regular } from '../../styles/components/Text'
import { styled } from 'linaria/react'
import { primary, white, darken_ultra } from '../../styles/colors'

const Wrap = styled.div`
  margin-top: 1rem;
  margin-left: 13px;
`

const Label = styled.label`
  display: block;
  position: relative;

  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  :hover > span {
    background-color: ${darken_ultra};
  }
`

const Text = styled.span`
  ${Regular}
  margin-left: 26px;
`

const Checkmark = styled.span`
  position: absolute;
  top: -2px;
  left: 0;
  height: 1rem;
  width: 1rem;
  border-radius: 2px;
  border: solid 1px #d9d9d9;
  background-color: ${white};

  ::after {
    content: '';
    position: absolute;
    display: none;

    left: 5.76px;
    top: 3.2px;
    width: 3.2px;
    height: 6.4px;
    border: solid white;
    border-radius: 2px;
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`

const Input = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;

  :checked ~ span {
    background-color: ${primary};
    border: solid 1px transparent;
  }

  :checked ~ span:after {
    display: block;
  }
`

const Checkbox = (props: Props) => (
  <Label>
    <Input {...props} type="checkbox" />
    <Checkmark />
  </Label>
)

export const CheckboxWithText = (props: Props) => (
  <Wrap>
    <Checkbox {...props} />
    <Text>{props.value}</Text>
  </Wrap>
)

type Props = {
  value: string
  onChange: (e: JSX.TargetedEvent<HTMLInputElement, Event>) => void
  checked: boolean
}
