const readMoreBtn = document.querySelector('.read__more')
const readMoreText = document.querySelector('.read__more__text')


readMoreBtn.addEventListener('click', () => {
  readMoreText.classList.toggle('--hide')
  if (readMoreBtn.textContent === 'Læs mere her...') {
    readMoreBtn.textContent = 'Læs mindre...'
  } else {
    readMoreBtn.textContent = 'Læs mere her...'
  }
})