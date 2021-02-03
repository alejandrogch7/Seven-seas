const images = document.querySelectorAll('.img-gallery')
const imagesLight = document.querySelector('.add-image')
const containerLight = document.querySelector('.image-light')
const hamburgerD = document.querySelector('.hamburger')

images.forEach(image => {
    image.addEventListener('click', ()=>{
        AppearImage(image.getAttribute('src'))
    })    
});

containerLight.addEventListener('click',(e)=>{
    if(e.target !== imagesLight){
        containerLight.classList.toggle('show')
        imagesLight.classList.toggle('showImage')
        hamburgerD.style.opacity = '1'

    }
})

const AppearImage = (image)=>{
    imagesLight.src = image
    containerLight.classList.toggle('show')
    imagesLight.classList.toggle('showImage')
    hamburgerD.style.opacity = '0'
}