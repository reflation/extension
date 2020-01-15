const leftFrame = document.getElementById('leftFrame') as HTMLIFrameElement

const getDocuemntFromIFrame = () =>
  leftFrame.contentWindow
    ? leftFrame.contentWindow.document
    : leftFrame.contentDocument

const localStorageClear = () => localStorage.clear()

leftFrame.onload = () => {
  getDocuemntFromIFrame()
    .querySelector('td[valign="bottom"][align="right"]')
    .addEventListener('click', localStorageClear)
}
