import { JSX } from 'preact'

import axios from 'axios'
import { base64 } from '../../utils/encoder'

export const encodeAccount = ({ student_no, student_pw }: Account) => {
  const formDataEncoded = new FormData()
  formDataEncoded.append('tmpu', base64(student_no))
  formDataEncoded.append('tmpw', base64(student_pw))
  return formDataEncoded
}

export const formSubmit = async (input: FormData) => {
  const { data } = await axios.post<string>(
    'https://dreamy.jejunu.ac.kr/frame/sysUser.do?next=',
    input,
    { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
  )

  if (data.includes('dbError')) {
    const invaildMessage = data
      .match(/var dbError = "(?:\.|(\\\")|[^\""\n])*"/)[0]
      .slice(15, -1) as ErrorMessage

    throw invaildMessage === Exceed ? Result.blocked : Result.invalid
  }
}

const Exceed = '5회이상 로그인에 실패하여 10분간 로그인이 제한됩니다.'

type ErrorMessage =
  | '아이디 또는 비밀번호를 확인하세요. 5회이상 로그인에 실패한 경우 10분간 로그인이 제한됩니다.(1회 실패)'
  | '아이디 또는 비밀번호를 확인하세요. 5회이상 로그인에 실패한 경우 10분간 로그인이 제한됩니다.(2회 실패)'
  | '아이디 또는 비밀번호를 확인하세요. 5회이상 로그인에 실패한 경우 10분간 로그인이 제한됩니다.(3회 실패)'
  | '아이디 또는 비밀번호를 확인하세요. 5회이상 로그인에 실패한 경우 10분간 로그인이 제한됩니다.(4회 실패)'
  | '아이디 또는 비밀번호를 확인하세요. 5회이상 로그인에 실패한 경우 10분간 로그인이 제한됩니다.(5회 실패)'
  | '5회이상 로그인에 실패하여 10분간 로그인이 제한됩니다.'

type Account = { student_no: string; student_pw: string }

export enum Result {
  'clear',
  'invalid',
  'blocked',
}

export interface TargetElements extends EventTarget {
  student_no: HTMLInputElement
  student_pw: HTMLInputElement
}

export interface SubmitEvent extends JSX.TargetedEvent<HTMLFormElement, Event> {
  target: TargetElements
}
