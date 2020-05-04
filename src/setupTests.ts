// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference types="enzyme-adapter-preact-pure" />
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-preact-pure'

configure({ adapter: new Adapter() })
