import { submitAndRedirect, Account } from './login'

export const isKeepLoginEnabled = () =>
  localStorage.getItem('keepLogin') === 'true'

export const saveAccountInfo = (info: Account) => {
  localStorage.setItem('account', JSON.stringify(info))
}

export const setKeepLogin = (isKeepLogin: boolean) => {
  localStorage.setItem('keepLogin', `${isKeepLogin}`)
}

export const submitWhenKeepLogin = async (isKeepLogin: boolean) => {
  if (isKeepLogin) {
    const account: Account = JSON.parse(localStorage.getItem('account'))
    await submitAndRedirect(account)
  }
}
