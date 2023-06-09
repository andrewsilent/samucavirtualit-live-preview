(function init() {
  const buttons = document.querySelectorAll('.buttons .link')
  const images = document.querySelectorAll('.backgrounds .bg')

  buttons.forEach((e, i) => {
    e.addEventListener('mouseenter', () => {
      const active = document.querySelectorAll('.active')

      if (active && active.length > 0) {
        active.forEach(e => {
          e.classList.remove('active')
        })
      }

      images[i].classList.add('active')
      e.classList.add('active')
    })
  })
})()
