const iconOpen = document.querySelector('#menuIconOpen');
const iconClose = document.querySelector('#menuIconClose');

const viewMenuOptions = document.querySelector('.menu-options-mobile'); 


iconOpen.addEventListener('click', toogleViewMenu);
iconClose.addEventListener('click', toogleViewMenu);

function toogleViewMenu() {
    viewMenuOptions.classList.toggle('inactive');
}