const form = document.querySelector('form');
const ul = document.querySelector('ul');
const input = document.querySelector('input');
const done = document.querySelector('.done');


let tasks = [];
if (localStorage.tasks){
    tasks = JSON.parse(localStorage.tasks);
}

for (let task of tasks){
    let li = document.createElement('li');
    let checkbox = document.createElement('input');
    let button = document.createElement('button');
    button.innerText = 'X';
    checkbox.type = 'checkbox';
    checkbox.className = 'checkbox';
    li.innerText = task;
    li.prepend(checkbox);
    ul.appendChild(li);
    li.appendChild(button);
    checkbox.addEventListener('click', (event) => {
        if (checkbox.checked){
            li.style.textDecoration = 'line-through';
            ul.appendChild(li);
        } else{
            li.style.textDecoration = 'none';
            ul.prepend(li);
        }
    })
    button.addEventListener('click', (event) => {
        li.remove()
    })
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let li = document.createElement('li');
    let checkbox = document.createElement('input');
    let button = document.createElement('button');
    button.innerText = 'X';
    checkbox.type = 'checkbox';
    checkbox.className = 'checkbox';
    li.innerText = input.value;
    li.prepend(checkbox);
    ul.appendChild(li);
    li.appendChild(button);
    tasks.push(input.value);
    localStorage.tasks = JSON.stringify(tasks);
    input.value = '';
    checkbox.addEventListener('click', (event) => {
        if (checkbox.checked){
            li.style.textDecoration = 'line-through';
            ul.appendChild(li);
        } else{
            li.style.textDecoration = 'none';
            ul.prepend(li);
        }
    })
    button.addEventListener('click', (event) => {
        li.remove()
    })
})
done.addEventListener('click', (event) => {
    document.querySelectorAll('li').forEach(item => {
        item.style.textDecoration = 'line-through';
    })
})

