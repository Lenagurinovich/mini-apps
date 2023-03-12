const popup_btn = document.querySelector('.popup-btn');
const popup = document.querySelector('.popup')
const popup_content = document.querySelector('.popup__content')
const popup_close = document.querySelector('.popup__close')

popup_btn.addEventListener('click', (event) => {
    popup.classList.add('opened');
})

popup_close.addEventListener('click', (event) => {
    popup.classList.remove('opened');
})

window.addEventListener('click', (event) => {
    event.target.classList.remove('opened');
    
})