let pos = 1; 
const char = document.getElementById('character');
const couple = document.querySelector('img[alt="Yes"]');
const sad = document.querySelector('img[alt="No"]')

function moveLeft() {
    if (pos > 0) pos--;
    update();
}

function moveRight() {
    if (pos < 2) pos++;
    update();
}

function update() {
    couple.classList.remove('revealed', 'zoom-shake');
    sad.classList.remove('revealed', 'zoom-shake');

    if (pos === 0) {
        char.style.left = "var(--yes-spot)"; 
        couple.classList.add('revealed', 'zoom-shake');
    } else if (pos === 1) {
        char.style.left = "var(--mid-spot)";
    } else {
        char.style.left = "var(--no-spot)";
        sad.classList.add('revealed', 'zoom-shake');
    }
}