import { h, render } from 'preact'
import App from './app/app'

import './styles/reset.css'
import './styles/theme.css'

import {
  reconstruct,
  isOptOut,
  isSessionExpired,
  optOutUrl,
} from './utils/reconstruct'

const main = async () => {
  if (isOptOut()) return
  if (!(await isSessionExpired())) location.href = 'main.do'
  if (process.env.isExt === 'true') reconstruct('하영드리미: 로그인')
  render(<App optOutUrl={optOutUrl()} />, document.querySelector('#app'))
}

main().catch(e => console.error(e ? e.stack || e : e))
