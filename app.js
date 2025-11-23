document.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.inner-menu')
  const hamburger = document.querySelector('.hamburger-menu')
  const closeButton = document.querySelector('.btn')

  hamburger.addEventListener('click', () => {
    menu.classList.remove('translate-x-full')
    menu.classList.add('translate-x-0')
  })

  closeButton.addEventListener('click', () => {
    menu.classList.remove('translate-x-0')
    menu.classList.add('translate-x-full')
  })
})
