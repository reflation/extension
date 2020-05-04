import { Status, TargetElements, requestFromTargetElements } from './login'
import { useReducer } from 'react'
import { isKeepLoginEnabled } from './localStorage'

type Action = 'correct' | 'invaild' | 'blocked' | 'keep' | 'unKeep'
export type ThunkAction = Action | ((action: ThunkAction) => void)

const [CORRECT, INVAILD, BLOCKED] = ['correct', 'invaild', 'blocked'] as const
export const [KEEP, UNKEEP] = ['keep', 'unKeep'] as const

export const submitCreator = (payload: TargetElements) => async (
  dispatch: (action: Action) => void
) => {
  try {
    await requestFromTargetElements(payload)
    dispatch(CORRECT)
  } catch (err) {
    switch (err) {
      case Status.invalid:
        dispatch(INVAILD)
        break
      case Status.blocked:
        dispatch(BLOCKED)
        break
    }
  }
}

export type State = { status: Status; isKeepLogin: boolean }

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
  status: Status.idle,
  isKeepLogin: isKeepLoginEnabled(),
}

const reducer = (state: State, action: Action) => {
  switch (action) {
    case CORRECT:
      return { ...state, status: Status.correct }
    case INVAILD:
      return { ...state, status: Status.invalid }
    case BLOCKED:
      return { ...state, status: Status.blocked }
    case KEEP:
      return { ...state, isKeepLogin: true }
    case UNKEEP:
      return { ...state, isKeepLogin: false }
    default:
      throw new Error('Unexpected action')
  }
}
