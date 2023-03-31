const images = Array.from(document.querySelectorAll('.section__item__image'))
const leftArrow = document.querySelector('.fa-chevron-left')
const rightArrow = document.querySelector('.fa-chevron-right')
let index = 0;

const img_db = [
  'billede-af-th-g-fra-pixabay-1.webp',
  'tour-de-france-leader-in-yellow.webp',
  'tour-de-france-feltet.webp',
  'tour-de-france-bil-cykler.webp',
]

function rightClick() {
  if (index < 3) {
    index++
  } else {
    index = 0
  }
}

function leftClick() {
  if (index === 0) {
    index = 3
  } else {
    index--
  }
}

function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time))
}

function nextImageAnimation() {
  images[index].classList.add('prev__active')
  delay(490).then(() => {
    images[index].classList.remove('current__image')
    images[index].classList.remove('prev__active')
    rightClick()
    images[index].classList.add('current__image')
    images[index].classList.add('next__active')
    delay(490).then(() => {
      images[index].classList.remove('next__active')
    })
  })
}

function previousImageAnimation() {
  images[index].classList.add('prev__active__reverse')
  delay(490).then(() => {
    images[index].classList.remove('current__image')
    images[index].classList.remove('prev__active__reverse')
    leftClick()
    images[index].classList.add('current__image')
    images[index].classList.add('next__active__reverse')
    delay(490).then(() => {
      images[index].classList.remove('next__active__reverse')
    })
  })
}

rightArrow.addEventListener('click', () => {
  nextImageAnimation()
})

leftArrow.addEventListener('click', () => {
  previousImageAnimation()
})