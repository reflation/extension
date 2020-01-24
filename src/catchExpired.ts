const isExpired =
  document.scripts[0].text ===
  "\talert('Session 이 종료되었습니다.');\ttop.location='/frame/sysUser.do'    "

if (isExpired) {
  document.scripts[0].text = ''
  location.href = 'index.do'
}
