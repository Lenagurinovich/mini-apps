const burger_btn = document.querySelector('.burger__btn');
const burger_content = document.querySelector('.burger__content');
const burger_close = document.querySelector('.burger__close');
const input = document.querySelector('.search');
const text = document.querySelector('.text');

burger_btn.addEventListener('click', (event) => {
    burger_btn.classList.add('opened__btn');
    burger_content.classList.add('opened');
    burger_close.classList.add('opened__close');
});

burger_close.addEventListener('click', (event) => {
    burger_btn.classList.remove('opened__btn');
    burger_content.classList.remove('opened');
    burger_close.classList.remove('opened__close');
});

text.addEventListener('focus', (event) => {
    input.style.background = 'white'
});