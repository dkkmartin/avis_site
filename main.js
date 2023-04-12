import GenerateArticle from './modules/fetch_articles'
import GenerateImage from './modules/get_image'

const menuBtnOpen = document.querySelector('.fa-solid')
const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const middleArticlePara = document.querySelector('.middle__section__p__article')
const middleArticleHeading = document.querySelector('.middle__section__h1')
const image = document.querySelector('.middle__section__img')

async function getNewArticle () {
  const randomNum = GenerateArticle.randomNumber()
  console.log('Getting new articles...')
  const newImageLink = GenerateImage.makeImageLink(randomNum)
  image.src = newImageLink
  const newHeading = await GenerateArticle.getHeading(randomNum)
  const newPara = await GenerateArticle.getPara(randomNum)
  console.log('Articles fetched')
  middleArticleHeading.innerText = newHeading
  middleArticlePara.innerText = newPara
}

(function makeGptBtn () {
  const main = document.querySelector('main')
  const btn = document.createElement('button')
  btn.classList.add('gpt__btn')
  btn.style.zIndex = '10'
  btn.textContent = 'GPT'
  main.append(btn)
  const gptBtn = document.querySelector('.gpt__btn')
  gptBtn.addEventListener('click', () => {
    getNewArticle()
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.95)'
    overlay.classList.add('overlay--active')
    overlay.classList.add('animate__fadeIn')
    delay(5000).then(() => {
      overlay.classList.remove('animate__fadeIn')
      overlay.classList.add('animate__fadeOut')
      delay(1000).then(() => {
        overlay.classList.remove('overlay--active')
        overlay.classList.add('animate__fadeOut')
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.7)'
        delay(1).then(() => { overlay.classList.remove('animate__fadeOut') })
      })
    })
  })
})()

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
