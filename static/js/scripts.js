const updateHeader = () => {
  const header = document.querySelector('header')
  const hero = document.querySelector('.hero')
  const logo = document.querySelector('.logo img')

  document.addEventListener('scroll', (e) => {
    if (hero.getBoundingClientRect().top < -100) {
      header.classList.add('scrolled')
      logo.attributes.src.value = '/static/images/UC_mark_white.svg'
      logo.style.width = '40px'
    } else {
      header.classList.remove('scrolled')
      logo.attributes.src.value = '/static/images/UC_logo_white.svg'
      logo.style.width = '200px'
    }
  })
}

updateHeader()
