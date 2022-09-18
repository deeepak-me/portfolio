const slides = document.querySelector('.client-slide');
const button = document.querySelector('.nxt-btn');
let numberOfSlides = document.querySelectorAll('.client-card').length;

console.log(numberOfSlides);

let slideIndex = 1;
let translateX = 0;


button.addEventListener('click', e => {
    if (e.target.id === 'next') {
        if (slideIndex !== numberOfSlides) {
            slideIndex++;
            translateX -= 362;
        }
    }
    slides.style.transform = `translateX(${translateX}px)`;
})

