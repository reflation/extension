import { h, render } from 'preact'
import App from './app/app'

import './styles/app.less'

import { reconstruct } from './utils/reconstruct'

const main = async () => {
  reconstruct('전체 성적 조회')
  render(<App />, document.body)
}

main().catch(e => console.error(e ? e.stack || e : e))
