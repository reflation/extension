import {
  encodeAccount,
  getElementValues,
  Account,
  Status,
  TargetElements,
  SubmitEvent,
} from '../login.common'

import 'dotenv/config'
const { expectUsername, expectPassword } = process.env

export const submitAndRedirect = async (props: Account) => {
  await formSubmit(encodeAccount(props))
}

export const requestFromTargetElements = (target: TargetElements) =>
  submitAndRedirect(getElementValues(target))

const wrongCount = {
  count: 0,
  currentUsername: expectUsername,
}

const decode = window.atob

const formSubmit = async (input: FormData) => {
  const student_no = decode(input.get('tmpu').toString())
  const student_pw = decode(input.get('tmpw').toString())
  if (student_no === expectUsername && student_pw === expectPassword) return

  if (wrongCount.currentUsername === student_no) {
    wrongCount.count += 1
  } else {
    wrongCount.currentUsername = student_no
    wrongCount.count += 1
  }

  throw wrongCount.count < 5 ? Status.invalid : Status.blocked
}

export { getElementValues, Account, Status, TargetElements, SubmitEvent }
