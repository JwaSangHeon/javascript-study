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

//if(조건문)
//if(condition){...condition===true}
const myRealAge = parseInt(prompt('How old are you?'));//prompt 사용하지 않는다.(css적용불가, js일시정지)
console.log();
if(isNaN(myRealAge) || myRealAge<0){
    console.log('Please write a real positive number');
}else if(myRealAge<18){
    console.log('You are too young!');
}else if(myRealAge>=18 && myRealAge<=50){//and는 &&로 사용, or은 ||로 사용
    console.log('You can drink!');
}else{
    console.log(`Why don't you quit to drink?`);
}
//else는 선택사항, 꼭 있어야 하지는 않는다.
