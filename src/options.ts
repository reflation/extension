import { browser } from 'webextension-polyfill-ts'

window.onload = () => {
  const checkbox = document.querySelector('input[type="checkbox"]')

  if (!(checkbox instanceof HTMLInputElement)) {
    throw Error(`Can't Inspect Input Element`)
  }

  checkbox.toggleAttribute('disable')

  isChangePasswordIgnore().then(isIgnore => {
    checkbox.checked = isIgnore
  })

  checkbox.addEventListener('click', () => {
    browser.storage.local.set({
      reflation_opt_in_change_password_ignore: checkbox.checked,
    })
  })
}

export async function isChangePasswordIgnore() {
  const got = await browser.storage.local.get(
    'reflation_opt_in_change_password_ignore'
  )

  return !!got.reflation_opt_in_change_password_ignore
}
