const loginForm = document.querySelector('#login-form');
const greeting = document.querySelector('#greeting');
const loginInput = loginForm.querySelector('input');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

function submitId(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY,username);
    paintGreeting(username);
}

function paintGreeting(username){
    greeting.innerText = `hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

if(savedUserName === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener('submit',submitId);
}else{
    paintGreeting(savedUserName);
}