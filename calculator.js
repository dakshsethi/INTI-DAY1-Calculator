let screen = document.getElementById('screen');
buttons= document.querySelectorAll('button');
let sval='';

let prints = document.querySelectorAll('.print');
prints.forEach(print => {
    print.addEventListener('click', () => {
        let val = print.innerHTML;
        sval = screen.value;
        screen.value+=val;
    })
})

let erase = document.querySelector('.erase');
erase.addEventListener('click', () => {
    screen.value = '';
})

let equal = document.querySelector('.eval');
equal.addEventListener('click', () => {
    screen.value = eval(screen.value);
})     