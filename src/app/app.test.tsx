import { h } from 'preact'

import { mount } from 'enzyme'

const Sample = () => <span>Hello</span>

describe('Sample component', () => {
  test('inner text is Hello', () => {
    const renderd = mount(<Sample />)

    expect(renderd.text()).toBe('Hello')
  })
})
