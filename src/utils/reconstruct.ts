export const reconstruct = (title: string) => {
  const root = document.createElement('html')
  document.replaceChild(root, document.documentElement)
  root.innerHTML = [
    '<head>',
    '<meta charset="utf-8">',
    // eslint-disable-next-line max-len
    '<meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0">',
    `<title>${title}</title>`,
    '</head>',
    '<body>',
    `<div id="app" style="${Style}"/>`,
    '</body>',
  ].join('')
}

// eslint-disable-next-line max-len
const Style = `display: flex; flex-direction: column; overflow-x: hidden; width: 100vw; height: 100vh; background-color: #F7F7F7; font-size: 16px`
