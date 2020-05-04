import axios from 'axios'
import {
  encodeAccount,
  getElementValues,
  Account,
  Status,
  TargetElements,
  SubmitEvent,
} from './login.common'

export const formSubmit = async (input: FormData) => {
  const { data } = await axios.post<string>(
    'https://dreamy.jejunu.ac.kr/frame/sysUser.do',
    input,
    { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
  )

  if (data.includes('dbError')) {
    const invaildMessage = data
      .match(/var dbError = "(?:\.|(\\\")|[^\""\n])*"/)[0]
      .slice(15, -1) as ErrorMessage

    throw invaildMessage === Exceed ? Status.blocked : Status.invalid
  }
}

export const submitAndRedirect = async (props: Account) => {
  await formSubmit(encodeAccount(props))
  location.href = 'main.do'
}
export const requestFromTargetElements = (target: TargetElements) =>
  submitAndRedirect(getElementValues(target))

const Exceed = '5회이상 로그인에 실패하여 10분간 로그인이 제한됩니다.'

type ErrorMessage =
  | '아이디 또는 비밀번호를 확인하세요. 5회이상 로그인에 실패한 경우 10분간 로그인이 제한됩니다.(1회 실패)'
  | '아이디 또는 비밀번호를 확인하세요. 5회이상 로그인에 실패한 경우 10분간 로그인이 제한됩니다.(2회 실패)'
  | '아이디 또는 비밀번호를 확인하세요. 5회이상 로그인에 실패한 경우 10분간 로그인이 제한됩니다.(3회 실패)'
  | '아이디 또는 비밀번호를 확인하세요. 5회이상 로그인에 실패한 경우 10분간 로그인이 제한됩니다.(4회 실패)'
  | '아이디 또는 비밀번호를 확인하세요. 5회이상 로그인에 실패한 경우 10분간 로그인이 제한됩니다.(5회 실패)'
  | '5회이상 로그인에 실패하여 10분간 로그인이 제한됩니다.'

export { getElementValues, Account, Status, TargetElements, SubmitEvent }
