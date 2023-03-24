const menuBtn = document.querySelector('.fa-bars')
const modal = document.querySelector('.modal')

menuBtn.addEventListener('click', () => {
  modal.classList.toggle('modal--active')
  
})