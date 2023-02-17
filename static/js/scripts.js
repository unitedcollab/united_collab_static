const updateHeader = () => {
  const header = document.querySelector('header')
  const hero = document.querySelector('.hero')
  const logo = document.querySelector('.logo img')

  var fired = false

  document.addEventListener('scroll', (e) => {
    if (hero.getBoundingClientRect().top < -100 && fired === false) {
      header.classList.add('scrolled')
      logo.attributes.src.value = '/static/images/UC_mark_white.svg'
      logo.style.width = '40px'
      fired = true
    }
    if (hero.getBoundingClientRect().top > -100 && fired === true) {
      header.classList.remove('scrolled')
      logo.attributes.src.value = '/static/images/UC_logo_white.svg'
      logo.style.width = '200px'
      fired = false
    }
  })
}

updateHeader()
