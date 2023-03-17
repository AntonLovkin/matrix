/* ----------course program--------------------- */

const controls = document.querySelector('.program__list');

controls.addEventListener('click', (evt) => {
    if (evt.target === evt.currentTarget
        || evt.target.parentNode === evt.currentTarget) {
        return
    }
    evt.preventDefault();
    
    const prevActiveModule = document.querySelector(".program__card.is-active");

    if (prevActiveModule) {
        prevActiveModule.classList.remove("is-active");
    }
    const moduleId = evt.target.parentNode.getAttribute("href").slice(1);
    const nextActiveModule = document.querySelector(`#${moduleId}`);
    nextActiveModule.classList.add("is-active");
}
);

/* ------------mobile-menu------------- */

const menuBtn = document.querySelector('.nav__button');
const menuItems = document.querySelectorAll('.nav__item-mobile');

menuBtn.addEventListener('click', () => {
    const menuList = document.querySelector('.nav__list-mobile');
    menuList.classList.toggle('is-hidden');
    menuBtn.classList.toggle('active');
});

const menuList = document.querySelector('.nav__list-mobile');

menuList.addEventListener('click', (evt) => {
    if (evt.currentTarget === evt.target) {
        return
    }
    menuList.classList.toggle('is-hidden');
    menuBtn.classList.toggle('active');
    console.log(menuList);
}
);
