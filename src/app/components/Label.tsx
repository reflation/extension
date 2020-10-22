import { h } from 'preact'

import { red, primary } from '../../styles/colors'
import { Regular } from '../../styles/components/Text'
import { styled } from 'linaria/react'

interface WarningLabelProp {
  isBlocked: boolean
}

const Label = styled.label`
  ${Regular};
`

const RedLabel = styled(Label)<WarningLabelProp>`
  padding-bottom: 1rem;
  transition: opacity 0.5s;
  opacity: ${props => (props.isBlocked ? 1 : 0)};
  color: ${red};
`

const CenterLabel = styled(Label)`
  text-align: center;
  margin-top: 16px;
`

const TextButton = styled.button`
  color: ${primary};
  font-weight: bold;
  padding: 0;
  background-color: transparent;
  font-size: 1em;
  cursor: pointer;
`

export const WarningLabel = ({ isBlocked }: WarningLabelProp) => (
  <RedLabel isBlocked={isBlocked}>너무 많이 로그인을 시도하였습니다</RedLabel>
)

const openFindPassword = () => {
  open('/frame/sysUserPwdSearch.do', '_blank', 'width=475, height=300')
}

export const FindPassword = () => (
  <CenterLabel>
    또는 <TextButton onClick={openFindPassword}>비밀번호 찾기</TextButton>
  </CenterLabel>
)
