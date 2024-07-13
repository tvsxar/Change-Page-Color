const changeBtn = document.querySelector('.change');
const body = document.querySelector('body');
const hex = '0123456789ABCDEF';
let color = '';

function changeColor() {
    for(i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * hex.length)];
    }
    return `#${color}`;
}

changeBtn.addEventListener('click', () => {
    body.style.backgroundColor = changeColor();
    changeBtn.innerText = `#${color}`;
    color = '';
})