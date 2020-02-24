import { Result } from './login'
import { useReducer } from 'preact/hooks'
import { isKeepLoginEnabled } from './localStorage'

export type Action = 'invaild' | 'blocked' | 'keep' | 'unKeep'

export const [INVAILD, BLOCKED, KEEP, UNKEEP] = [
  'invaild',
  'blocked',
  'keep',
  'unKeep',
] as const

type State = { isWrong: Result; isKeepLogin: boolean }

export default () => {
  const [state, dispatch] = useReducer<State, Action>(reducer, initialState)
  return { ...state, dispatch }
}

const initialState: State = {
  isWrong: Result.clear,
  isKeepLogin: isKeepLoginEnabled(),
}

const reducer = (state: State, action: Action) => {
  switch (action) {
    case INVAILD:
      return { ...state, isWrong: Result.invalid }
    case BLOCKED:
      return { ...state, isWrong: Result.blocked }
    case KEEP:
      return { ...state, isKeepLogin: true }
    case UNKEEP:
      return { ...state, isKeepLogin: false }
    default:
      throw new Error('Unexpected action')
  }
}
