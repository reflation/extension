import * as login from '../login'

import 'dotenv/config'

const { expectUsername, expectPassword } = process.env

const encode = window.atob

const wrongCount = {
  count: 0,
  currentUsername: expectUsername,
}

const formSubmit = async (input: FormData) => {
  const student_no = encode(input.get('tmpu').toString())
  const student_pw = encode(input.get('tmpu').toString())
  if (student_no === expectUsername && student_pw === expectPassword) return

  if (wrongCount.currentUsername === student_no) {
    wrongCount.count += 1
  } else {
    wrongCount.currentUsername = student_no
    wrongCount.count += 1
  }

  throw wrongCount.count < 5 ? login.Result.invalid : login.Result.blocked
}

export default { ...login, formSubmit }
