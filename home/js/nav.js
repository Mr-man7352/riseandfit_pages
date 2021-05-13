let menu = document.getElementById('menu')
let nav = document.getElementById('nav')
let header = document.getElementById('header')


menu.addEventListener('click', ()=>{
    console.log('clicked')
    menu.classList.toggle('fa-times')
    nav.classList.toggle('active')
    header.classList.toggle('resposive')


})