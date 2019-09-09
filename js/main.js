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

// DOM Level selectors
const confirmButton = document.querySelector('#confirm-button');

confirmButton.addEventListener('click', () => {
    console.log("CLICK");
})






