const loginForm = document.getElementById('form-box');

loginForm.addEventListener('submit', e =>{
    e.preventDefault();
    window.location.href = "http://localhost:3000/index.html";
});