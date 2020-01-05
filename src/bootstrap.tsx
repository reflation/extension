import { h, render } from 'preact'
import App from './app/app'

import './styles/reset.css'
import './styles/theme.css'

import { reconstruct } from './utils/reconstruct'

if (process.env.isExt === 'true') reconstruct('하영드리미: 로그인')
render(<App />, document.querySelector('#app'))
