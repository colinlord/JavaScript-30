window.addEventListener('keydown', playDrum);

function playDrum(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if (!audio)
        return; // kills the function if the key doesn't match an audio file
    audio.currentTime = 0; // lets you play the same sound over and over and over
    audio.play();

    key.classList.add('playing'); // add the playing class when played
}

function removeTransition(e) {
    if (e.propertyName !== 'transform')
        return; // ignore anything that isn't the transform property
    this.classList.remove('playing'); // remove playing class and fade it out
}

const keys = document.querySelectorAll('.key'); // get an array of any elements with a class of key
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
