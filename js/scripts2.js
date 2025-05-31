// let closeButton = document.getElementById('close-button')
// let menuButton = document.getElementById('menu-button')

// let mobileNav = document.getElementById('mobile-nav')


// closeButton.addEventListener('click',function name(params) {
//     mobileNav.classList.add('mobile-nav-closed');
// })

// menuButton.addEventListener('click',function name(params) {
//     mobileNav.classList.remove('mobile-nav-closed');

// })\


let myButton = document.getElementById('mybutton')
let myNav = document.getElementById('mynav')

let flag = 0;

myButton.addEventListener('click',function name(params) {

    if (flag == 0){
        myNav.style.height = 'fit-content';
        flag = 1;

    }
    else{
        myNav.style.height = '50px';
        flag = 0;
    }
})