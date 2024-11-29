const hamburger = document.querySelector('.promo__hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

const counters = document.querySelectorAll('.skils__percent_procent'),
    lines = document.querySelectorAll('.skils__percent_process span');

counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});