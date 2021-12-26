const main = document.querySelector('.main-menu')
const tog = document.querySelector('#togs')

pudding = () => {
    main.classList.toggle('active')
    tog.classList.toggle('is-active')

}
tog.addEventListener('click', pudding);