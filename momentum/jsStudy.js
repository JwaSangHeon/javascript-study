//1. Data type & Variable
const a = 1; // const는 상수 즉, 값이 변하지 않을 때(일반적으로 사용)
let b = `string`;// let은 값이 업데이트 될 수 있다.
var c = false; // 사용하지 않는다.
//대부분 const를 사용하고 필요할 때만 let사용

//보통 변수이름을 만들때 띄어쓰기가 필요할 때, 대문자를 사용한다.
const varyLongVariableName = 'hello';

//null값을 변수에 아무것도 없는 것을 넣는것, 
//undefined은 값 자체가 존재하지 않는다.
const amIFat = null;
let something; //undefined

//요일들의 나열
//배열 : 하나의 variable 안에 데이터의 list를 가지는 것
const daysOfWeek = ['mon','tue','wed','thu','fri','sat','sun'];
console.log(daysOfWeek[2]);
daysOfWeek.push('Special day');
console.log(daysOfWeek);

//게임 캐릭터에 관한 정보
//Object: 다른 값을 가질 수 있다.
const player = {
    name:'sangheon',
    points:1212,
    fat:true
};
console.log(player);
console.log(player.name);
player.fat =false;
player.lastName = 'Jwa';
console.log(player);

// 2.function
function sayHello(){
    console.log("Hello");
}

sayHello();
sayHello();

//입력 받기
function sayHello2(nameOfPerson, age){
    console.log('Hello my name is '+ nameOfPerson + ' my age is '+ age);
}
sayHello2('nico',10);
sayHello2('sangheon',25);

function plus(firstNumber,secondNumber){
    console.log(firstNumber+secondNumber);
}
plus(1,2);

//object에 함수 추가
player.sayHello3 = function(){
    console.log('Hello!');
}
player.sayHello3();

//challenge
const calculator = {
    add:function(firstNumber,secondNumber){
        console.log(firstNumber+secondNumber);
    },
    minus:function(firstNumber,secondNumber){
        console.log(firstNumber-secondNumber);
    },
    divide:function(firstNumber,secondNumber){
        console.log(firstNumber/secondNumber);
    },
    power:function(firstNumber,secondNumber){
        console.log(firstNumber**secondNumber);
    },
};
calculator.add(10,10);
calculator.minus(10,10);
calculator.divide(10,10);
calculator.power(10,10);

//return
const myAge = 25;
function calculateKrAge(ageOfForeigner){
    return ageOfForeigner+2;
}
const krAge = calculateKrAge(myAge);
console.log(krAge);

//3. if(조건문)
//if(condition){...condition===true}
//const myRealAge = parseInt(prompt('How old are you?'));//prompt 사용하지 않는다.(css적용불가, js일시정지)
const myRealAge = parseInt('15');
console.log();
if(isNaN(myRealAge) || myRealAge<0){
    console.log('Please write a real positive number');
}else if(myRealAge<18){
    console.log('You are too young!');
}else if(myRealAge>=18 && myRealAge<=50){//and는 &&로 사용, or은 ||로 사용
    console.log('You can drink!');
}else if(myRealAge === 100){ //값이 같다면
    console.log('wow you are wise');
}else{
    console.log(`Why don't you quit to drink?`);
}
//else는 선택사항, 꼭 있어야 하지는 않는다.

//4.start js
//document는 연결되어 있는 HTML파일을 뜻한다.
//즉, document.title은 HTML파일의 헤드에 들어있는 title을 뜻한다.
document.title = 'Hi from JS';

//HTML파일에 접근
// const title = document.getElementById('title');
// console.dir(title);
// title.innerText = 'got you!';
// console.log(title.className);

//getElements ~~~ 는 전체를 다 가져온다.(array형태)
// const hellos = document.getElementsByClassName('hello');
// console.log(hellos);

//★★★querySelector : element들을 css(selector)방식으로 검색할 수 있다.
//하나의 값을 리턴 해준다.
const title = document.querySelector('.hello h1');
// 만약 '.hello h1'이 많다면, 가장 첫번째 한개만 가져온다.
// 다 가져오고 싶으면 quetySelectorAll사용
// title.innerText = 'Hello';
console.dir(title);

//title의 style속성에 color값을 지정
// title.style.color = 'blue';

//함수를 만들고 그 함수를 클릭이 일어났을 때, 실행.
function handleTitleClick(){
    // console.log(title.style.color);
    // title.style.color = 'blue';
    // console.log(title.style.color);

    // if(title.style.color === 'blue'){
    //     title.style.color = 'green';
    // }else{
    //     title.style.color = 'blue';
    // }
    // //-------->>>
    // const currentColor = title.style.color;
    // let newColor;
    // if(currentColor === 'blue'){
    //     newColor = 'green';
    // }else{
    //     newColor = 'blue';
    // }
    // title.style.color = newColor;

    //className은 getter 이면서, setter다.
    //code를 깔끔하게 하기 위해선 반복을 줄인다.
    //const clicked = 'active';
    // active를 변수화
    // className은 모든 class를 교체하지만
    // classList는 class를 목록으로 작업할 수 있게 한다.
    
    // if(title.classList.contains(clicked)){
    //     title.classList.remove(clicked);
    // }else{
    //     title.classList.add(clicked);
    // }
    //===
    title.classList.toggle('active');
}

//addEventListener을 통해 title이 클릭되기까지 기다렸다가,
//클릭이 되는 순간 listen한다.(함수 실행)
title.addEventListener('click',handleTitleClick);
//=== title.onclick = handleTitleClick;(2번째 방법)

//click과 같은 eventlistener를 찾고싶으면
//구글 검색 or console.dir(요소)를 통해서 on이 붙은것을 찾는다.
//on을 제외한 것이 eventlistener!!
// function handleTitleMouseEnter(){
//     title.innerText = "Mouse is here!";
// }
// function handleTitleMouseLeave(){
//     title.innerText = 'Mouse is not here!';
// }

// title.addEventListener('mouseenter',handleTitleMouseEnter);
// title.addEventListener('mouseleave',handleTitleMouseLeave);
// //대부분의 style은 css로만 작업한다.

// //5. window
// //window를 통해 접근 가능 (window창)
// function handleWindowResize(){
//     document.body.style.backgroundColor='tomato';//document.body만 가능 세부적인 태그는 호출 불가
// }
// function handleWindowCopy(){
//     alert('Copier!');
// }
// function handleOffline(){
//     alert('NO WIFI PLEASE CONNECT!');
// }
// function handleOnline(){
//     alert('ALL GOOD!!!!');
// }

// window.addEventListener('resize',handleWindowResize);
// window.addEventListener('copy',handleWindowCopy);
// window.addEventListener('offline',handleOffline);
// window.addEventListener('online',handleOnline);