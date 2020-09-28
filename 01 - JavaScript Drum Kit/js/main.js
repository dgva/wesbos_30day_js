function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)

    if (!audio) return; // If key pressed is not in the selection, stops the rest of the function from running

    audio.currentTime = 0; // Allows for repeated press of the key, thus repeating the sound befor it stops
    audio.play();

    key.classList.add('playing');
};

function removeTransition(e) {
    if (e.propertyName !== 'transform') return; // skip this if there is no transform property in the selection
    this.classList.remove('playing'); // 'this' works against the thing that was called in the function. So, 'addEventListener' was called against 'key'
};

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition)); // It needs to be looped through each node element, because it does not work if we write this for all the keys at once.


window.addEventListener('keydown', playSound); 
