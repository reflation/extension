import { Result, TargetElements, requestFromTargetElements } from './login'
import { useReducer } from 'preact/hooks'
import { isKeepLoginEnabled } from './localStorage'

type Action =
  | { type: 'RESULT'; payload: Result }
  | { type: 'KEEP'; payload: boolean }

export type ThunkAction = Action | ((action: ThunkAction) => void)

const resultCreator = (result: Result): Action => ({
  type: 'RESULT',
  payload: result,
})

export const keepCreator = (isKeep: boolean): Action => ({
  type: 'KEEP',
  payload: isKeep,
})

export const submitCreator = (payload: TargetElements) => async (
  dispatch: (action: Action) => void
) => {
  const result = await requestFromTargetElements(payload)
  dispatch(resultCreator(result))
}

export type State = { result: Result; isKeepLogin: boolean }

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
  result: Result.idle,
  isKeepLogin: isKeepLoginEnabled(),
}

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'RESULT':
      return { ...state, result: action.payload }
    case 'KEEP':
      return { ...state, isKeepLogin: action.payload }
    default:
      throw new Error('Unexpected action')
  }
}
