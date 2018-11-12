//Set DOM items
const menu = document.querySelector('.menu');
const menuBtn = document.querySelector('.menu-btn')
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.nav-item');
const main = document.querySelector('main');





//Set initial state of menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);


function toggleMenu() 
{
    if(!showMenu)
    {
        //hides home text
        main.classList.add('hide');


        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));

        //set menu state
        showMenu = true;
    } 
    else 
    {
        main.classList.remove('hide');


        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));

        //set menu state
        showMenu = false;
    }

}