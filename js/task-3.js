
const refs = {
    inputName: document.querySelector('#name-input'),
    outputName: document.querySelector('#name-output'),
};

refs.inputName.addEventListener('input', inputNameChange);

function inputNameChange(event) {
    const clearedValue = event.currentTarget.value.trim()
    if(clearedValue) {
        refs.outputName.textContent = clearedValue;
    }
    else{
        refs.outputName.textContent = 'Anonymous';
    }
}


