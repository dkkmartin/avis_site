const menuBtn = document.querySelector('.fa-bars')
const modal = document.querySelector('.modal')
const mobileHeader = document.querySelector('.header__mobile')

menuBtn.addEventListener('click', () => {
  modal.classList.toggle('modal--active')
  mobileHeader.classList.toggle('header--expand')
  
})