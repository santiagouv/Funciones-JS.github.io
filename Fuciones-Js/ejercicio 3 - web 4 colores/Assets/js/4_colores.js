const bule = document.getElementById ('blue');
const red = document.getElementById ('red');
const green = document.getElementById ('green');
const yellow = document.getElementById('yellow');

const color = document.querySelectorAll('div');
const allColors = ['blue', 'red', 'green', 'yellow'];

color.forEach(function (allColors) {
    allColors.addEventListener('click', function() {
        allColors.style.backgroundColor = 'black';
    });
});