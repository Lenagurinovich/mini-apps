const hour = document.querySelector('.hour');
const min = document.querySelector('.min');
const sec = document.querySelector('.sec');

setInterval(() => {
    let newDate = new Date();
    hour.innerText = newDate.getHours();
    min.innerText = newDate.getMinutes();
    sec.innerText = newDate.getSeconds();
}, 1000);

