(function init() {
  const buttons = document.querySelectorAll('.button')
  const images = document.querySelectorAll('.bg')
  const input = document.querySelector('input')
  const label = document.querySelector('label')

  buttons.forEach((e, i) => {
    e.addEventListener('mouseenter', () => {
      const active = document.querySelector('.active')
      active.classList.remove('active')
      images[i].classList.add('active')
    })
  })

  input.addEventListener('input', (e) => {
    label.textContent = `Transition Duration: ${e.target.value}`
    images.forEach(image => {
      image.style.transitionDuration = `${e.target.value}ms` || '500ms'
    })
  })
})()
