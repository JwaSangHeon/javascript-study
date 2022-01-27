const loginForm = document.querySelector('.login-form');
const loginInput = loginForm.querySelector('input');
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';
//string만 포함한 변수는 대문자로 표기한다.

//const loginButton = loginForm.querySelector('button');

// function loginButtonCliked(){
//     const username = loginInput.value;
//     console.log(username);

//     //이렇게 js로 구현할 수 있지만, HTML을 이용해서
//     //브라우저를 이용하는 것이 좋다.
//     //ex) form, required, maxlength 등등
//     if(username === ""){
//         alert('Plese write your name!');
//     }else if(username.length>15){
//         alert('Your name is too long!');
//     }else{
//         console.log("Hello!",username);
//     }
// }
//loginButton.addEventListener('click', loginButtonCliked);

function loginFormSubmit(event){
    event.preventDefault();// ★기본동작을 막는다(페이지 새로고침)
    // console.log(event); // 이렇게 하면 js가 어떤 정보를 가지고 함수를 호출하는지 알 수 있다.
    const username = loginInput.value;
    // console.log(username);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY,username);
    //localstorage는 유저네임을 기억하게 해준다.(데이터저장)
    // setItem, removeItem, getItem
    paintGreeting(username);
}

// const link = document.querySelector('a');


// function handleAClicked(event){
//     event.preventDefault();
//     console.dir(event);
    
// }
// //함수가 실행될 때, event의 정보가 담긴 Object가 
// //EventListener의 첫번째 인자로 주어진다.

// link.addEventListener('click',handleAClicked);

const savedUserName = localStorage.getItem(USERNAME_KEY);
console.log(savedUserName);

if(savedUserName === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener('submit',loginFormSubmit);
}else{
    paintGreeting(savedUserName);
}

// 반복을 줄이기 위해 코드가 중복되는 것을 함수화 한다.
function paintGreeting(username){
    greeting.innerText = `hello! ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}