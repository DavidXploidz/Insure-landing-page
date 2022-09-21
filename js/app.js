
// Selectores Globales

const menu = document.querySelector('#menu')
const menuHam = document.querySelector('#menuHam')
const menuClose = document.querySelector('#menuClose')
const menuOculto = document.querySelector('.menuOculto')


//Evento para mostrar y ocultar menú mobile
menu.addEventListener('click', () => {
    menuHam.classList.toggle('d-none')
    menuClose.classList.toggle('d-none')
    menuOculto.classList.toggle('d-none')
})