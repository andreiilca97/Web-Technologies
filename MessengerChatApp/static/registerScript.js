const form = document.getElementById('container-form');
const username = document.getElementById('username');
const password = document.getElementById('password');
const email = document.getElementById('email');

form.addEventListener('submit', e =>{
    e.preventDefault();
    checkInputs();
});

function checkInputs(){
    // get values of the inputs:
    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();
    const emailValue = email.value.trim();

    if(usernameValue === ''){
        // show error:
        // add error class
        setErrorFor(username, 'Username cannot be blank');
    }
    else{
        // add success class:
        setSuccesssFor(username);
    }

}

function setErrorFor(input, message){
    const formControl = input.parentElement;    // .form-control
    const small = formControl.getElementById('error'); 
    small.innerText = message;
   

    // add error class:
    formControl.className = 'form-control error';


}