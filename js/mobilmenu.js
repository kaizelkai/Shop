// const menuIcon = document.querySelector('#menuBt');
// const nav = document.querySelector('.navBar');


// menuIcon.addEventListener('click',()=>{
//     // menuIcon.classList.toggle("btx-x");
//     nav.classList.toggle('active');
// });



const menuIcon = document.querySelector('#menuBt');
const nav = document.querySelector('.navBar');

const ficterMobile = document.querySelector('.ficterMobile');
const filter = document.querySelector('.allFilter');

if (menuIcon && nav) {
    menuIcon.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
}

if (ficterMobile) {
    ficterMobile.addEventListener('click', () => {
        if (filter) {
            filter.classList.toggle('active');
        }
        ficterMobile.classList.toggle('active');
    });
}