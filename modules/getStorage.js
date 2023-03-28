const heading = document.querySelector('#title')
const title = document.querySelector('#text')
const price = document.querySelector('#price')
const rabat = document.querySelector('#rabat')

const btnObj  = JSON.parse(localStorage.getItem('btn'))
console.log(btnObj)
heading.textContent = btnObj.title