const leftFrame = document.getElementById('leftFrame') as HTMLIFrameElement

const getDocuemntFromIFrame = (frameRef: HTMLIFrameElement) =>
  frameRef.contentWindow
    ? frameRef.contentWindow.document
    : frameRef.contentDocument

setTimeout(() => {
  getDocuemntFromIFrame(leftFrame)
    .querySelector('td[valign="bottom"][align="right"]')
    .addEventListener('click', () => localStorage.clear())
}, 10000)
