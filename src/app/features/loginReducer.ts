import { Result, TargetElements, requestFromTargetElements } from './login'
import { useReducer } from 'preact/hooks'
import { isKeepLoginEnabled } from './localStorage'

type Action = 'invaild' | 'blocked' | 'keep' | 'unKeep'
type ThunkAction = Action | ((action: ThunkAction) => void)

const [INVAILD, BLOCKED] = ['invaild', 'blocked'] as const
export const [KEEP, UNKEEP] = ['keep', 'unKeep'] as const

export const submitCreator = (payload: TargetElements) => async (
  dispatch: (action: Action) => void
) => {
  try {
    await requestFromTargetElements(payload)
  } catch (err) {
    switch (err) {
      case Result.invalid:
        dispatch(INVAILD)
        break
      case Result.blocked:
        dispatch(BLOCKED)
        break
    }
  }
}

type State = { isWrong: Result; isKeepLogin: boolean }

export default function useThunkReducer() {
  const [state, dispatch] = useReducer<State, Action>(reducer, initialState)

  const enhancedDispatch = (action: ThunkAction) => {
    if (typeof action === 'function') {
      action(enhancedDispatch)
    } else {
      dispatch(action)
    }
  }
  return { state, dispatch: enhancedDispatch }
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
