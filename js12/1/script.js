const buttons = document.querySelectorAll('button');
const tabs = document.querySelectorAll('div');

let openTab = function(btn, id){
    tabs.forEach(element => element.classList.remove('active'));
    buttons.forEach(btn => {
        btn.classList.remove('active')
        if (btn === event.target){
            let tab = document.getElementById(id);
            tab.classList.add('active');
        }
    })
    
}   

buttons.forEach(element => {
    element.addEventListener('click', event => {
        element.classList.add('active');
        openTab(event.target, `${element.id}-content`)
    })
});