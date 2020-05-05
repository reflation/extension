import { Status, TargetElements, requestFromTargetElements } from './login'
import { useReducer } from 'preact/hooks'
import { isKeepLoginEnabled } from './localStorage'

const ACTIONS = ['correct', 'invaild', 'blocked', 'keep', 'unKeep'] as const
const [CORRECT, INVAILD, BLOCKED, KEEP, UNKEEP] = ACTIONS

type Action = typeof ACTIONS[number]
export type ThunkAction = Action | ((action: ThunkAction) => void)

export { KEEP, UNKEEP }

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
