const panels = document.querySelectorAll('.panel');

function toggleOpen() {
    this.classList.toggle('open');
}

function toggleActive(event) {
    if (event.propertyName.includes('flex')) { // listens for when the flex property changes and fires this next
        this.classList.toggle('open-text')
    }
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
