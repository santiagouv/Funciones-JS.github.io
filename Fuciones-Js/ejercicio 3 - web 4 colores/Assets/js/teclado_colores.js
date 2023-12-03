const tecla1 = document.getElementById('key');

document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
        tecla1.style.backgroundColor = 'pink';
    } else if (event.key === 's') {
        tecla1.style.backgroundColor = 'orange';
    } else if (event.key === 'd') {
        tecla1.style.backgroundColor = 'lightblue';
    }
});

let remove = function() {
    const other = tecla2.classList.contains('cubo');
    if (others) {
        tecla2.classList.remove('cubo');
    };
};

const tecla2 = document.getElementById('key2');

document.addEventListener('keydown', function (event) {
    if (event.key === 'q' || event.key === 'w' || event.key === 'e') {
        tecla2.classList.add('cubo');
    }
    if (event.key === 'q') {
        tecla2.style.backgroundColor = 'purple';
    } else if (event.key === 'w') {
        tecla2.style.backgroundColor = 'grey';
    } else if (event.key === 'e') {
        tecla2.style.backgroundColor = 'brown';
    };
});