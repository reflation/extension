import { mainBoxShadow, white } from '../colors'

export const Root = `display: flex; justify-content: center; width: 100vw; height: 100vh; background-color: #F7F7F7`

const Template = {
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '15px',
  boxShadow: `15px 19px 32px -18px ${mainBoxShadow}`,
  backgroundColor: white,
}

export const Box = {
  ...Template,
  width: '430px',
  borderRadius: '15px',
  alignSelf: 'center',
  padding: '61px 32px 91px 32px',
}
