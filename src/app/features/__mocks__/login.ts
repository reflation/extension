import {
  getElementValues,
  submitWrapper,
  FormSubmit,
  Account,
  Result,
  TargetElements,
  SubmitEvent,
} from '../login.common'

import 'dotenv/config'
const { expectUsername, expectPassword } = process.env
const wrongCount = {
  count: 0,
  currentUsername: expectUsername,
}

const formSubmit: FormSubmit = async (input: FormData) => {
  const student_no = atob(input.get('tmpu').toString())
  const student_pw = atob(input.get('tmpw').toString())
  if (student_no === expectUsername && student_pw === expectPassword) {
    return Result.correct
  }

  if (wrongCount.currentUsername === student_no) {
    wrongCount.count += 1
  } else {
    wrongCount.currentUsername = student_no
    wrongCount.count += 1
  }

  return wrongCount.count < 5 ? Result.invalid : Result.blocked
}

export const submitter = submitWrapper(formSubmit)

export const requestFromTargetElements = (target: TargetElements) =>
  submitter(getElementValues(target))

export { getElementValues, Account, Result, TargetElements, SubmitEvent }
