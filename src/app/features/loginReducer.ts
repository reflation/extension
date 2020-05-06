import { Status, TargetElements, requestFromTargetElements } from './login'
import { useReducer } from 'preact/hooks'
import { isKeepLoginEnabled } from './localStorage'

type Action =
  | { type: 'STATUS'; payload: Status }
  | { type: 'KEEP'; payload: boolean }

export type ThunkAction = Action | ((action: ThunkAction) => void)

const statusCreator = (status: Status): Action => ({
  type: 'STATUS',
  payload: status,
})

export const keepCreator = (isKeep: boolean): Action => ({
  type: 'KEEP',
  payload: isKeep,
})

export const submitCreator = (payload: TargetElements) => async (
  dispatch: (action: Action) => void
) => {
  const status = await requestFromTargetElements(payload)
  dispatch(statusCreator(status))
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
  switch (action.type) {
    case 'STATUS':
      return { ...state, status: action.payload }
    case 'KEEP':
      return { ...state, isKeepLogin: action.payload }
    default:
      throw new Error('Unexpected action')
  }
}
