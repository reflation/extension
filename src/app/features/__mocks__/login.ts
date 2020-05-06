import {
  getElementValues,
  submitWrapper,
  FormSubmit,
  Account,
  Status,
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
    return Status.correct
  }

  if (wrongCount.currentUsername === student_no) {
    wrongCount.count += 1
  } else {
    wrongCount.currentUsername = student_no
    wrongCount.count += 1
  }

  return wrongCount.count < 5 ? Status.invalid : Status.blocked
}

export const submitter = submitWrapper(formSubmit)

export const requestFromTargetElements = (target: TargetElements) =>
  submitter(getElementValues(target))

export { getElementValues, Account, Status, TargetElements, SubmitEvent }
