const hamburger = document.querySelector('.hamburger')
const menu = document.querySelector('.navigation_menu')

console.log(menu)
console.log(hamburger)

hamburger.addEventListener('click', ()=>{
    menu.classList.toggle("spread")
})

window.addEventListener('click', e=>{
    if(menu.classList.contains('spread')&&e.target != menu && e.target != hamburger){
        menu.classList.toggle('spread')
    }

})