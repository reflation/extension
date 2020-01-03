import { Result } from './login'
import { useReducer } from 'preact/hooks'
import { isKeepLoginEnabled } from './localStorage'

export type Action =
  | 'login/invalid'
  | 'login/blocked'
  | 'login/keep'
  | 'login/unKeep'

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
    case 'login/invalid':
      return { ...state, isWrong: Result.invalid }
    case 'login/blocked':
      return { ...state, isWrong: Result.blocked }
    case 'login/keep':
      return { ...state, isKeepLogin: true }
    case 'login/unKeep':
      return { ...state, isKeepLogin: false }
    default:
      throw new Error('Unexpected action')
  }
}
