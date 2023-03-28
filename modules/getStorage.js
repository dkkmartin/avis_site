const heading = document.querySelector('#title')
const title = document.querySelector('#text')
const price = document.querySelector('#price')
const rabat = document.querySelector('#rabat')

const btnObj  = JSON.parse(localStorage.getItem('btn'))
heading.textContent = btnObj.title
title.textContent = btnObj.text
price.textContent = btnObj.price
rabat.textContent = btnObj.price
