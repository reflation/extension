const leftFrame = document.getElementById('leftFrame') as HTMLIFrameElement

const getDocuemntFromIFrame = () =>
  leftFrame.contentWindow
    ? leftFrame.contentWindow.document
    : leftFrame.contentDocument

setTimeout(() => {
  getDocuemntFromIFrame()
    .querySelector('td[valign="bottom"][align="right"]')
    .addEventListener('click', () => localStorage.clear())
}, 10000)
