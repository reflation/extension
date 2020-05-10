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
  transition: opacity 0.5s;
  opacity: ${props => (props.isBlocked ? 1 : 0)};
  color: ${red};
`

export const WarningLabel = ({ isBlocked }: WarningLabelProp) => (
  <Label isBlocked={isBlocked}>너무 많이 로그인을 시도하였습니다</Label>
)
