const btn1 = document.querySelector('.selection__1')
const btn2 = document.querySelector('.selection__2')
const btn3 = document.querySelector('.selection__3')

window.addEventListener('load', () => {
  localStorage.clear()
})

const priceInfo_db = [
  {
    title: 'Digital',
    text: 'Abonnementet giver ubegrænset adgang til den digitale avis. Abonnementet er fortløbende og fortsætter efter den første måned til normalpris.',
    price: '210,00'
  },

  {
    title: 'Digital og weekend',
    text: 'Abonnementet giver ubegrænset adgang til den digitale avis, samt papiravisen tilsendt fredag og lørdag. Abonnementet er fortløbende og fortsætter efter den første måned til normalpris. ',
    price: '315,00'
  },

  {
    title: 'Fuldt abonnement',
    text: 'Abonnementet giver ubegrænset adgang til den digitale avis, samt papiravisen tilsendt fredag og lørdag. Du får også en is. Abonnementet er fortløbende og fortsætter efter den første måned til normalpris. ',
    price: '440,00'
  }
]

btn1.addEventListener('click', () => {
  localStorage.setItem('btn', JSON.stringify(priceInfo_db[0]))
})

btn2.addEventListener('click', () => {
  localStorage.setItem('btn', JSON.stringify(priceInfo_db[1]))
})

btn3.addEventListener('click', () => {
  localStorage.setItem('btn', JSON.stringify(priceInfo_db[2]))
})
