
const refs = {
    inputName: document.querySelector('#name-input'),
    outputName: document.querySelector('#name-output'),
};

refs.inputName.addEventListener('input', inputNameChange);

function inputNameChange(event){
    if(event.currentTarget.value){
        refs.outputName.textContent.trim() = event.currentTarget.value;
    }
    else{
        refs.outputName.textContent = 'Anonymous';
    }
}


