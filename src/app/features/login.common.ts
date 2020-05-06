import { JSX } from 'preact'

const encodeAccount = ({ student_no, student_pw }: Account) => {
  const formDataEncoded = new FormData()
  formDataEncoded.append('tmpu', btoa(student_no))
  formDataEncoded.append('tmpw', btoa(student_pw))
  return formDataEncoded
}
export const getElementValues = (target: TargetElements) => {
  const {
    student_no: { value: student_no },
    student_pw: { value: student_pw },
  } = target

  return { student_no, student_pw }
}

export const submitWrapper = (formSubmit: FormSubmit) => (props: Account) =>
  formSubmit(encodeAccount(props))

export type FormSubmit = (input: FormData) => Promise<Result>

export type Account = { student_no: string; student_pw: string }

export enum Result {
  'idle',
  'correct',
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
