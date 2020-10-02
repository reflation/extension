import { Result, TargetElements, requestFromTargetElements } from './login'
import { useReducer } from 'preact/hooks'
import { isKeepLoginEnabled } from './localStorage'

const [RESULT, KEEP] = ['RESULT', 'KEEP'] as const

interface Action<Type extends string, Payload> {
  type: Type
  payload: Payload
}

type Actions = Action<typeof RESULT, Result> | Action<typeof KEEP, boolean>

export type ThunkAction = Actions | ((action: ThunkAction) => void)

const resultCreator = (result: Result): Actions => ({
  type: 'RESULT',
  payload: result,
})

export const IDLE = resultCreator(Result.idle)

export const keepCreator = (isKeep: boolean): Actions => ({
  type: 'KEEP',
  payload: isKeep,
})

export const submitCreator = (payload: TargetElements) => async (
  dispatch: (action: Actions) => void
) => {
  const result = await requestFromTargetElements(payload)
  dispatch(resultCreator(result))
}

export interface State {
  result: Result
  isKeepLogin: boolean
}

export default function useThunkReducer() {
  const [state, dispatch] = useReducer<State, Actions>(reducer, initialState)

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

const reducer = (state: State, action: Actions) => {
  switch (action.type) {
    case RESULT:
      return { ...state, result: action.payload }
    case KEEP:
      return { ...state, isKeepLogin: action.payload }
    default:
      throw new Error('Unexpected action')
  }
}
