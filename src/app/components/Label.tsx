import { h } from 'preact'

import { red } from '../../styles/colors'
import { Regular } from '../../styles/components/Text'
import { styled } from 'linaria/react'

interface WarningLabelProp {
  isBlocked: boolean
}

const Label = styled.label<WarningLabelProp>`
  ${Regular}
  padding-bottom: 1rem;
  transition: color 0.5s;
  color: ${props => (props.isBlocked ? red : 'transparent')};
`

export const WarningLabel = ({ isBlocked }: WarningLabelProp) => (
  <Label isBlocked={isBlocked}>너무 많이 로그인을 시도하였습니다</Label>
)
