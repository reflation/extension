import { JSX } from 'preact'

import { base64 } from '../../utils/encoder'

export const encodeAccount = ({ student_no, student_pw }: Account) => {
  const formDataEncoded = new FormData()
  formDataEncoded.append('tmpu', base64(student_no))
  formDataEncoded.append('tmpw', base64(student_pw))
  return formDataEncoded
}
export const getElementValues = (target: TargetElements) => {
  const {
    student_no: { value: student_no },
    student_pw: { value: student_pw },
  } = target

  return { student_no, student_pw }
}

export type Account = { student_no: string; student_pw: string }

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
