const getDocuemntFromIFrame = (frameRef: HTMLIFrameElement) =>
  frameRef.contentWindow
    ? frameRef.contentWindow.document
    : frameRef.contentDocument

setTimeout(() => {
  getDocuemntFromIFrame(
    document.getElementById('leftFrame') as HTMLIFrameElement
  )
    .querySelector('td[valign="bottom"][align="right"]')
    .addEventListener('click', () => localStorage.clear())
}, 10000)
