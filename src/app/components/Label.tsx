import { h } from 'preact'

import { red } from '../../styles/colors'
import { Regular } from '../../styles/components/Text'
import { styled } from 'linaria/react'

const RedLabel = styled.label`
  ${Regular}
  color: ${red};
  padding-bottom: 1rem;
`

export const WarningLabel = () => (
  <RedLabel>너무 많이 로그인을 시도하였습니다</RedLabel>
)
