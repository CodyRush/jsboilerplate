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

// Basic reference variable
const tagline = document.querySelector('.tagline')

console.log(tagline.textContent);
