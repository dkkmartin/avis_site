
const menuBtnOpen = document.querySelector('.fa-solid')
const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')

function delay (time) {
  return new Promise(resolve => setTimeout(resolve, time))
}

menuBtnOpen.addEventListener('click', () => {
  if (modal.classList.contains('modal--active')) {
    modal.classList.remove('animate__slideInDown')
    overlay.classList.remove('animate__fadeIn')
    modal.classList.add('animate__slideOutUp')
    overlay.classList.add('animate__fadeOut')
    delay(1000).then(() => {
      modal.classList.remove('animate__slideOutUp')
      modal.classList.remove('modal--active')
      overlay.classList.remove('animate__fadeOut')
      overlay.classList.remove('overlay--active')
    })
    menuBtnOpen.classList.add('fa-bars')
    menuBtnOpen.classList.remove('fa-xmark')
  } else {
    overlay.classList.add('overlay--active')
    overlay.classList.add('animate__fadeIn')
    modal.classList.add('modal--active')
    modal.classList.add('animate__slideInDown')
    menuBtnOpen.classList.remove('fa-bars')
    menuBtnOpen.classList.add('fa-xmark')
  }
})
