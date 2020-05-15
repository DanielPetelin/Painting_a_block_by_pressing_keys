document.addEventListener('keydown', function(event) {
    if (event.code == 'KeyR') {
        document.querySelector('.block').style.backgroundColor = 'red';
    } else if (event.code == 'KeyG') {
        document.querySelector('.block').style.backgroundColor = 'green';
    } else if (event.code == 'KeyB') {
        document.querySelector('.block').style.backgroundColor = 'blue';
    } else if (event.code == 'Escape') {
        document.querySelector('.block').style.backgroundColor = 'black';
    }
});