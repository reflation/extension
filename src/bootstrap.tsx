import { h, render } from 'preact'
import App from './app/app'

import './styles/app.less'

import { reconstruct } from './utils/reconstruct'

if (process.env.isExt === 'true') reconstruct('하영드리미: 로그인')
render(<App optOutUrl={''} />, document.querySelector('#app'))
