function getDocuemntFromIFrame(frameRef: HTMLIFrameElement): HTMLDocument {
  return frameRef.contentWindow
    ? frameRef.contentWindow.document
    : frameRef.contentDocument
}
getDocuemntFromIFrame(document.getElementById('leftFrame') as HTMLIFrameElement)
  .querySelector('td[valign="bottom"][align="right"]')
  .addEventListener('click', localStorage.clear)
