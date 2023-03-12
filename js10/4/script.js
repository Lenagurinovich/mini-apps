const form = document.querySelector('form');
const ul = document.querySelector('ul');
const input = document.querySelector('input');
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
