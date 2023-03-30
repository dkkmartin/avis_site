const imgBox = document.querySelector('.section__item__image')
const leftArrow = document.querySelector('.fa-chevron-left')
const rightArrow = document.querySelector('.fa-chevron-right')
let index = 0;

const img_db = [
  'tour-de-france-leader-in-yellow.webp',
  'tour-de-france-feltet.webp',
  'tour-de-france-bil-cykler.webp',
  'billede-af-th-g-fra-pixabay-1.webp'
]

function rightClick() {
  if (index === 3) {
    index = 0
  } else {
    index++
  }
}

function leftClick() {
  if (index === 0) {
    index = 3
  } else {
    index--
  }
}

rightArrow.addEventListener('click', () => {
  imgBox.setAttribute('src', 'assets/images/sport/'+img_db[index])
  rightClick()
  console.log(index)
})

leftArrow.addEventListener('click', () => {
  imgBox.setAttribute('src', 'assets/images/sport/'+img_db[index])
  leftClick()
  console.log(index)
})