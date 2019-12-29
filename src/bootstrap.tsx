import { h, render } from 'preact'
import App from './app/app'

import './styles/app.less'

import { reconstruct } from './utils/reconstruct'

if (process.env.isExt === 'yes') reconstruct('하영드리미: 로그인')
render(<App />, document.querySelector('#app'))
