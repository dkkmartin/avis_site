const menuBtn = document.querySelector('.fa-solid')
const modal = document.querySelector('.modal')

menuBtn.addEventListener('click', () => {
  modal.classList.add('modal--active')
  modal.classList.add('animate__slideInDown')
  menuBtn.classList.remove('fa-bars')
  menuBtn.classList.add('fa-xmark')
})