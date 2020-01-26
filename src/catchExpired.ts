const expiredText =
  "\talert('Session 이 종료되었습니다.');\ttop.location='/frame/sysUser.do'    "

const expiredIndex = [...document.scripts].findIndex(
  i => i.text === expiredText
)

if (expiredIndex !== -1) {
  document.scripts[expiredIndex].text = ''
  location.href = 'index.do'
}
