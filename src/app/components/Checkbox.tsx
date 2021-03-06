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
  left: 0;
  height: 1rem;
  width: 1rem;
  border-radius: 2px;
  box-sizing: border-box;

  & {
    border: solid 1px #d9d9d9;
    background-color: ${white};
    transition: background-color 0.2s ease-in-out, border-width 0.2s ease-in-out;
  } /* CSS specificity hack */

  ::after {
    content: '';
    position: absolute;
    opacity: 0;
    transition: opacity 0.2s ease-in-out;

    left: 5.76px;
    top: 3.2px;
    width: 3.2px;
    height: 6.4px;
    border: solid white;
    border-radius: 2px;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
`

const Input = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;

  :checked ~ span {
    background-color: ${primary};
    border-width: 0;
  }

  :checked ~ span:after {
    opacity: 1;
  }
`

interface CheckboxProps {
  onChange: JSX.GenericEventHandler<HTMLInputElement>
  checked: boolean
}

interface LabeledCheckboxProps extends CheckboxProps {
  value: string
}

const Checkbox = (props: CheckboxProps) => (
  <Label>
    <Input {...props} type="checkbox" />
    <Checkmark />
  </Label>
)
export default function LabeledCheckbox(props: LabeledCheckboxProps) {
  const { value, ...fowardedProps } = props
  return (
    <Wrap>
      <Checkbox {...fowardedProps} />
      <Text>{value}</Text>
    </Wrap>
  )
}
