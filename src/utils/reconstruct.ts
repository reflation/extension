export const reconstruct = (title: string) => {
  {
    window.open = () => null
  }
  const root = document.createElement('html')
  document.replaceChild(root, document.documentElement)
  root.innerHTML = [
    '<head>',
    '<meta charset="utf-8">',
    '<meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0">',
    `<title>${title}</title>`,
    '</head>',
  ].join('')
}
