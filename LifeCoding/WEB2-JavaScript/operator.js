'use strict';
 // 1.String concatenation
console.log('my'+'cat');
console.log('1'+2);
console.log(`string literals: 1 + 2 = ${1+2}`);

// 2. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
console.log(preIncrement);
// counter = counter + 1;
// preIncrement = counter;
const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
// ++가 앞에 붙으면 값을 더한 다음 처리, 뒤에 붙으면 처리한 후 값을 더한다.(--도 마찬가지)

// 3.Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y;
x *= y;
x /= y;

//4. Comparison operators
console.log(10<6);
console.log(10<=6);
console.log(10>6);
console.log(10>=6);

//5. Logical Operators: ||(or), &&(and), !(not)
const value1 = false;
const value2 = 4<2;

// ||(or), finds the first truthy value
console.log(`or: ${value1 || value2 || check()}`);

// or은 앞에 조건부터 확인해서 true면 뒤에 조건에 상관없이 true출력(확인x)
// 따라서, 복잡한 연산일 수 록 뒤에 넣어서 마지막에 호출하는게 가장 좋다.

// &&(and), finds the first falsy value
console.log(`and: ${value1 && value2 && check()}`);

// or과 같이 복잡한 연산일 수 록 뒤에서 실행

// often used to compress long if-statement
// nullableObject && nullableObject.something
// 코드로 표현
// [if(nullableObject != null){
//     nullableObject.something;
// }]
function check(){
    for(let i =0; i<10; i++){
        //wasting time
        console.log('..');
    }
    return true;
}

// ! (not)
console.log(!value1);

// 7.Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive); //true -> 형 변환 후, 비교
console.log(stringFive != numberFive); //false

// === strict equality, no type conversion
console.log(stringFive === numberFive); //false
console.log(stringFive !== numberFive); //true

// object equality by reference
// object는 레퍼런스 형태로 저장된다.
const ellie1 = {name: 'ellie'};
const ellie2 = {name: 'ellie'};
const ellie3 = ellie1;
console.log(ellie1 == ellie2);
console.log(ellie1 === ellie2);
console.log(ellie1 === ellie3);

//equality - puzzler
console.log(0 == false);
console.log(0 === false);
console.log('' == false);
console.log('' === false);
console.log(null == undefined);
console.log(null === undefined);

// 8. Conditional operators: if
// if, else if, else
let name = 'ellie';
// name = 'coder';
if(name === 'ellie'){
    console.log('Welcome, Ellie!');
}
else if(name ==='coder'){
    console.log('You are amazing coder');
}
else{
    console.log('unknown');
}

// 9.Ternary operator: ?
// condition ? value1 : value2;
console.log(name ==='ellie' ? 'yes' : 'no');
// 조건 ? true일 때 값 : false일 떄 값
// 간단할 때, 사용(가독성 때문)

// 10.Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = 'IE';
switch (browser){
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('love you!');
        break;
        // 두 개의 출력이 같을 경우 case를 연달아서 사용가능
    default:
        console.log('same all!');
        break;
}

// 11. Loops
// while loop, while the condition is truthy,
// body code is executed.
let i = 3;
while(i>0){
    console.log(`while: ${i}`);
    i--;
}
// do while loop, body code is executed first,
// then check the condition.
do{
    console.log(`do while: ${i}`);
    i--;
} while (i>0);

// for loop, for(begin; condition; step)
for(i =3; i>0; i--){
    console.log(`for: ${i}`);
}

for(let i = 3; i>0; i=i-2){
    //inline variable declaration
    console.log(`inline variable for: ${i}`);
}

// nested loops
for(let i = 0; i < 10; i++){
    for(let j = 0; j < 10; j++){
        console.log(`i: ${i}, j: ${j}`);
    }
}
//Big-O가 n**2이 되서 cpu에 좋지 않다. 그래서 되도록 피하는 것이 좋다.

// break, continue
// Q1. iterate from 0 to 10 and print only even numbers
// (use continue)
for(let n = 0; n < 11; n++){
    if(n%2 !==0){
        continue;
    }
    console.log(`Q1. ${n}`);
}
// Q2. iterate from 0 to 10 and print numbers until reaching 8
// (use break)
for(let n = 0; n < 11; n++){
    if(n === 8){
        break;
    }
        console.log(n);
}

