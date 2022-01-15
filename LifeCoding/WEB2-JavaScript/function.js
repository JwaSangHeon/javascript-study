'use strict';

// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. Function declaration
// function name(param1, param2) { body... return;}
// one function === one thing
// naming: doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS

function printHello(){
    console.log(`Hello`);
}
printHello();

function log(message){
    console.log(message);
}
log('great');
log(1234);
// TypeScript를 배우면 입력과 출력의 타입을 명확하게 할 수 있다.

// 2. Parameters
// primitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj){
    obj.name = 'coder';
}
const ellie = { name : 'ellie' };
changeName(ellie);
console.log(ellie);

// 3.Default parameters(add in ES6)
function showMessage(message, from = 'unknown'){
    if (from === undefined){
        from = 'unknown';
    }
    console.log(`${message} by ${from}`);
}
showMessage('Hi');

// 4.Rest parameters (added in ES6)
function printAll(...args){
    for(let i = 0; i<args.length; i++){
        console.log(args[i]);
    }

    for(const arg of args){
        console.log(arg);
    }

    args.forEach((arg) => console.log(arg));
}
printAll('dream', 'coding', 'ellie');

// 5. Local scope
let globalMessage = 'global'; //global variable
function printMessage(){
    let message = 'hello';
    console.log(message); //local variable
    console.log(globalMessage);
}
printMessage();

// 6.Return a value
function sum(a,b){
    return a + b;
}
const result = sum(1,2); //3
console.log(`sum: ${sum(1,2)}`);

// 7. Early return, early exit
// bad
function upgradeUserbad(user){
    if(user.point > 10){
        //long upgrade logic...
    }
}
// good
function upgrageUsergood(user){
    if(user.point <= 10){
        return;
    }
    //long upgrade logic...
}

// First-class function
// function are treated like ant other variable
// can be assigned as a value to variable.
// can be passed as an argument to other functions.
// can be returned by another function

// 1.Function expression
// a function declaration can be called earlier than it is defined.(hoisted)
// a function expression is created when the execution reaches it.
const print = function (){ //anonymous function
    console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1,3));

// 2.Callback function using function expression
function randomQuiz(answer, printYes, printNo){
    if(answer === 'love you'){
        printYes();
    }else {
        printNo();
    }
}

// anonymous function
const printYes = function (){
    console.log('yes');
};

// named function
// better debugging in debugger's stack traces
// recursions(재귀)
const printNo = function print(){
    console.log('no');
};
randomQuiz('wrong',printYes,printNo);
randomQuiz('love you',printYes,printNo);

// Arrow function
// always anonymous
const simplePrint = function (){
    console.log('simplePrint!');
};

const simplePrintArrow = () => console.log('simplePrint!');
const add = (a,b) => a+b;

// IIFE: Immediately Invoked Function Expression
(function hello(){
    console.log('IIFE');
})();

// Quiz
// function calculate(command, a, b)
// command: add, substract, divide, multiply, remainder
// let command;
function calculate(command, a, b){
    switch (command) {
        case 'add':
            console.log(a+b);
            break;
        case 'substract':
            console.log(a-b);
            break;
        case 'divide':
            console.log(a/b);
            break;
        case 'multiply':
            console.log(a*b);
            break;
        default:
            return('NO');
    }
}

calculate('add',2,4);
calculate('substract', 3,1);
calculate('divide',3,6);

