const loginForm = document.querySelector('.login-form');
const loginInput = loginForm.querySelector('input');
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
    event.preventDefault();// 기본동작을 막는다(페이지 새로고침)
    // console.log(event); // 이렇게 하면 js가 어떤 정보를 가지고 함수를 호출하는지 알 수 있다.
    // const username = loginInput.value;
    // console.log(username);
    console.log(loginInput.value);
}

loginForm.addEventListener('submit',loginFormSubmit)