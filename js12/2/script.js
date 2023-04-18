const nav = document.querySelector('nav');
const btn = document.querySelector('button')

const body = document.querySelector('body');

btn.addEventListener('click', () => {
    body.classList.toggle('dark');
    if (btn.classList.contains('light')){
        btn.innerText = 'light theme';
    } else if (btn.classList.contains('dark')){
        btn.innerText = 'dark theme';
    }
})




