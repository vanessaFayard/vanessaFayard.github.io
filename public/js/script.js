// const toggleButton = document.getElementById("toggleColorMode");

// toggleButton.addEventListener('click', function() {
//     document.body.classList.toggle('dark-mode');
//     const currentMode = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
//     localStorage.setItem('preferred-mode', currentMode); 
// });


// const preferredMode = localStorage.getItem('preferred-mode');
// if (preferredMode === 'dark') {
//     document.body.classList.add('dark-mode');
// }

// navigation burger
const mainNav = document.getElementById('mainNav');
const burger = document.getElementById('burger');

burger.addEventListener('click', function() {
    burger.classList.toggle('burger-open');
    mainNav.classList.toggle('main-nav-open');
    document.documentElement.classList.toggle('overflow-hidden');
    document.body.classList.toggle('overflow-hidden');

});

// Background image grid
// window.addEventListener('DOMContentLoaded', function() {
    // var content = document.querySelector('.content');
    var main = document.querySelector('.main');
    console.log((main.scrollHeight));
    console.log( window.innerHeight);
    
    if ((main.scrollHeight) > window.innerHeight) {
        main.classList.add('illu-bg-grid');
    }
// });

