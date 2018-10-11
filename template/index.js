// The following code is based off a toggle menu by @Bradcomp
// source: https://gist.github.com/Bradcomp/a9ef2ef322a8e8017443b626208999c1

const burger = document.querySelector('.burger')
const menu = document.querySelector(`#${burger.dataset.target}`)
burger.addEventListener('click', () => {
  burger.classList.toggle('is-active')
  menu.classList.toggle('is-active')
})
