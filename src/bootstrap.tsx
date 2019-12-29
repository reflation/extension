import { h, render } from 'preact'
import App from './app/app'

import './styles/app.less'

import { reconstruct } from './utils/reconstruct'

// TODO: 빌드 타겟에 따라 아래 라인의 여부 결정하기
// reconstruct('하영드리미: 로그인')
render(<App />, document.querySelector('#app'))
