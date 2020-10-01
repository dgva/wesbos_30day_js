const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
    const suffix = this.dataset.sizing || ''; // This 'nothing' avoids the return of 'undefined', that could lead to problems, when getting data from an element that does not have it
    document.documentElement.style.setProperty(`--${this.name}`,  this.value + suffix);
    // console.log(suffix);
};

inputs.forEach(input => input.addEventListener('change', handleUpdate)); // Listens for changes, only gets the value on the end of the movement
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate)); // Listens for changes, whenever thhe mouse moves over the input