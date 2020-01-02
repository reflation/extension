import { Result } from './login'

export const initialState = Result.clear

export type LoginActions = 'login/invalid' | 'login/blocked'

export default (state: Result, action: LoginActions) => {
  switch (action) {
    case 'login/invalid':
      return Result.invalid
    case 'login/blocked':
      return Result.blocked
    default:
      throw new Error('Unexpected action')
  }
}
