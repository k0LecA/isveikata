const signupButton = document.getElementById('signup');
const loginButton = document.getElementById('login');
const signupForm = document.getElementById('signupForm');
const loginForm = document.getElementById('loginForm');
const overlay = document.getElementById('overlay');
const closeSign = document.getElementById('closeSign');
const closeLog = document.getElementById('closeLog');
const signUp = document.getElementById('sign');
const logIn = document.getElementById('log');

signupButton.addEventListener('click', () => {
    signupForm.style.display = 'block';
    overlay.style.display = 'block';
});
loginButton.addEventListener('click', () =>{
    loginForm.style.display='block';
    overlay.style.display='block';
});
closeLog.addEventListener('click', () => {
    loginForm.style.display='none';
    overlay.style.display = 'none';
});
closeSign.addEventListener('click', () => {
    signupForm.style.display = 'none';
    overlay.style.display = 'none';
});
overlay.addEventListener('click', () => {
    signupForm.style.display = 'none';
    loginForm.style.display = 'none';
    overlay.style.display = 'none';
});

signUp.addEventListener('click', () => {
    alert("Signed up as "+document.getElementById('fullname').value+"\n Email: "+document.getElementById('signMail').value);
});