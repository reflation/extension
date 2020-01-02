import { h } from 'preact'
import { memo } from 'preact/compat'

import { Result } from '../features/login'

import { red } from '../../styles/colors'
import { Regular } from '../../styles/components/Text'

export const WarningLabel = memo(
  ({ result }: { result: Result.invalid | Result.blocked }) => (
    <label style={{ color: red, ...Regular, paddingBottom: '1rem' }}>
      {result === Result.invalid
        ? '계정 정보가 유효하지 않습니다!'
        : '6회 이상 틀려 10분간 로그인이 제한됩니다'}
    </label>
  )
)
