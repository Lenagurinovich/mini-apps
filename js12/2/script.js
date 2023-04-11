const nav = document.querySelector('nav');
const btn = document.querySelector('button')

const body = document.querySelector('body');

btn.addEventListener('click', () => {
    if (btn.classList.contains('light')){
        btn.innerText = 'light theme';
        nav.classList.add('dark');
        btn.classList.add('dark');
        btn.classList.remove('light');
        body.classList.add('dark');
        console.log(1);
    } else if (btn.classList.contains('dark')){
        btn.innerText = 'dark theme';
        nav.classList.remove('dark');
        btn.classList.remove('dark');
        btn.classList.add('light');
        body.classList.remove('dark');
        console.log(2);
    }
})




