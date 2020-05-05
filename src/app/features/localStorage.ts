import { submitter, Account } from './login'

export const isKeepLoginEnabled = () =>
  localStorage.getItem('keepLogin') === 'true'

export const saveAccountInfo = (info: Account) => {
  localStorage.setItem('account', JSON.stringify(info))
}

export const setKeepLogin = (isKeepLogin: boolean) => {
  localStorage.setItem('keepLogin', `${isKeepLogin}`)
}

export const submitWhenKeepLogin = async () => {
  const account: Account | null = JSON.parse(localStorage.getItem('account'))
  if (isKeepLoginEnabled() && account) {
    await submitter(account)
    location.href = 'main.do'
  }
}
