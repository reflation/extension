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

export type keepLoginActions = 'login/keep' | 'login/unKeep'

export const keepLoginReducer = (state: boolean, action: keepLoginActions) => {
  switch (action) {
    case 'login/keep':
      return true
    case 'login/unKeep':
      return false
    default:
      throw new Error('Unexpected action')
  }
}
