import axios from 'axios'

const optOutQueryKey = 'enable'
const sessionExpired =
  "<SCRIPT type=text/javascript>	alert('Session 이 종료되었습니다.');	top.location='/frame/sysUser.do'    </SCRIPT>"

export const isSessionExpired = async () => {
  const { data } = await axios.get<string>(
    'https://dreamy.jejunu.ac.kr/frame/main.do',
    { headers: { Cookie: document.cookie } }
  )
  return data === sessionExpired
}

export const isOptOut = () => {
  return window.location.search.indexOf(`${optOutQueryKey}=false`) !== -1
}

export const optOutUrl = () => {
  let query = window.location.search
  if (query) {
    query += `&${optOutQueryKey}=false`
  } else {
    query = `?${optOutQueryKey}=false`
  }
  return window.location.origin + window.location.pathname + query
}

export const reconstruct = (title: string) => {
  const root = document.createElement('html')
  document.replaceChild(root, document.documentElement)
  root.innerHTML = [
    '<head>',
    '<meta charset="utf-8">',
    // eslint-disable-next-line max-len
    '<meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0">',
    `<link
      rel="stylesheet"
      href="https://d14yqt9xa48dep.cloudfront.net/nanumsquareround.min.css"
      media="all"
    />`,
    `<title>${title}</title>`,
    '</head>',
    '<body>',
    `<div id="app"/>`,
    '</body>',
  ].join('')
}
