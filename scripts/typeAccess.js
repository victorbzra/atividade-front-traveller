
const inputsForm = document.querySelectorAll('.formInput');

function animationInput(input) {
    console.log(input);
}

inputsForm.forEach((input)=>{
    input.addEventListener('focus', (input)=>{input.srcElement.classList.toggle('active');});
    input.addEventListener('blur', (input)=>{input.srcElement.classList.toggle('active');});
});

// const buttonSingUp = document.querySelector('.signUp-action');
// const main = document.querySelector('main');
// const access = document.querySelector('.group-access');
// const regis = document.querySelector('.group-registration');
// const buttons = document.querySelectorAll('.button-form');

// function initForm() {
//     main.classList.toggle('registration');
//     access.classList.toggle('off');
//     regis.classList.toggle('on');
// }

// buttonSingUp.addEventListener('click', initForm);