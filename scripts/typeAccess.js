const inputsForm = document.querySelectorAll('.formInput');

function animationInput(input) {
    console.log(input);
}

inputsForm.forEach((input)=>{
    input.addEventListener('focus', (input)=>{input.srcElement.classList.toggle('active');});
    input.addEventListener('blur', (input)=>{input.srcElement.classList.toggle('active');});
});