const hour = document.querySelector('.hour');
const min = document.querySelector('.min');
const sec = document.querySelector('.sec');

setInterval(() => {
    let newDate = new Date();
    hour.innerText = newDate.getHours() > 9 ? newDate.getHours() : '0' + newDate.getHours();
    min.innerText = newDate.getMinutes() > 9 ? newDate.getMinutes() : '0' + newDate.getMinutes();
    sec.innerText = newDate.getSeconds() > 9 ? newDate.getSeconds() : '0' + newDate.getSeconds();
}, 1000);

