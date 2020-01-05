import axios from 'axios'

const optOutQueryKey = 'enable'

export const isSessionExpired = async () => {
  const { data } = await axios.get<string>(
    'https://dreamy.jejunu.ac.kr/frame/main.do',
    { headers: { Cookie: document.cookie } }
  )

  return data.includes('Session 이 종료되었습니다.')
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
    `<title>${title}</title>`,
    '</head>',
    '<body>',
    `<div id="app"/>`,
    '</body>',
  ].join('')
}
