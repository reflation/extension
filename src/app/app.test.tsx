import 'dotenv/config'

const { echo } = process.env

test('Hello, Jest!', () => {
  expect(echo).toBe('Hello, Jest!')
})
