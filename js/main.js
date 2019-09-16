//Menu fucntionality
const menuButton = document.querySelector('#menu-button');
const mobileMenu = document.querySelector('#mobile-menu');

menuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
})

window.addEventListener('resize', () => {
    if(window.innerWidth > 760) {
        mobileMenu.classList.add('hidden')
    }
})

// Calculator 

const productName = document.querySelector('.product');
const productBid = document.querySelector('.bid');
const submitButton = document.querySelector('.submit-button');

submitButton.addEventListener('click', (e) => {
    console.log(e);
})






