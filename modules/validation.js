const form = document.querySelector('.signup__form')

form.addEventListener('submit', e => {
  for (c of fornavn.value) {
    if (!isNaN(c)) {
      e.preventDefault()
      fornavn.value = ''
      fornavn.setAttribute('placeholder', 'Indtast gyldigt navn')
      fornavn.focus()
      return false
    }
  }

  for (c of efternavn.value) {
    if (!isNaN(c)) {
      e.preventDefault()
      efternavn.value = ''
      efternavn.setAttribute('placeholder', 'Indtast gyldigt efternavn')
      efternavn.focus()
      return false
    }
  }

  if (email.value !== email_igen.value) {
    e.preventDefault()
    email_igen.value = ''
    email_igen.setAttribute('placeholder', 'Indtast ens e-mail')
    return false
  }

  if (adgangskode.value !== adgangskode_igen.value) {
    e.preventDefault()
    adgangskode_igen.value = ''
    adgangskode_igen.setAttribute('placeholder', 'Indtast ens adgangskode')
    return false
  }
})
