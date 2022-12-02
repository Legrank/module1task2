import './index.css'

const cookieBlok = document.querySelector('.cookie-consent')
const hide = localStorage.getItem('hide')
if (!hide) {
  const cookieBtn = document.querySelector('.cookie-consent__button')
  cookieBtn.addEventListener('click', () => {
    cookieBlok.classList.add('hide')
    const hide = localStorage.setItem('hide', 'true')
  })
} else {
  cookieBlok.classList.add('hide')
}
