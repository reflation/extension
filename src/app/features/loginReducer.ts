import { Result } from './login'
import { useReducer } from 'preact/hooks'
import { isKeepLoginEnabled } from './localStorage'

export type Action = 'invalid' | 'blocked' | 'keep' | 'unKeep'

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
    case 'invalid':
      return { ...state, isWrong: Result.invalid }
    case 'blocked':
      return { ...state, isWrong: Result.blocked }
    case 'keep':
      return { ...state, isKeepLogin: true }
    case 'unKeep':
      return { ...state, isKeepLogin: false }
    default:
      throw new Error('Unexpected action')
  }
}
