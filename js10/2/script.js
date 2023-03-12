const burger_btn = document.querySelector('.burger-btn');
const main = document.querySelector('main')
const navigation = document.querySelector('.navigation')
const nav_close = document.querySelector('.nav__close')


burger_btn.addEventListener('click', (event) => {
    burger_btn.classList.add('opened');
    main.classList.add('opened-main');
    navigation.classList.add('opened-nav');
});

nav_close.addEventListener('click', (event) => {
    burger_btn.classList.remove('opened');
    main.classList.remove('opened-main');
    navigation.classList.remove('opened-nav');
})