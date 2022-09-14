// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. Function declaration
// function name(param1, param2){body...return;}
// one function === one thing
// naming: doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS
function printHello(){
    console.log('hello')
}
printHello(); // 매개변수 없이는 함수의 용도가 딱히 유용하지 않음

function log(message){
    console.log(message);
}
log('Hello@'); // 매개변수로 값을 전달

// 2. Parameters
// primitive parameters : passed by value
// object parameters: passed by reference
function changeName(obj){
    obj.name = 'coder';
}
const ellie = { name: 'ellie'};
changeName(ellie);
console.log(ellie);

// 3. Default parameters(add in ES6)
function showMessage(message, from='unkown'){ // 디폴트 인자 지정
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');

// 4. Rest parameters (add in ES6)
function printAll(...args){ // ... 는 세 개의 값이 담겨져 있는 배열 형태로 전달
    for(let i=0; i<args.length; i++){
        console.log(args[i]);
        }
    for(const arg of args){
        console.log(arg);
    }
    
    args.forEach((arg) => console.log(arg));
}

    printAll('draem','coding','ellie');

// 5. Local scope
let globalMessage = 'global'; // global variable
function printMessage(){
    let message = 'hello';
    console.log(message); //local variable
    console.log(globalMessage);
    function printAnother(){
        console.log(message);
        let childMessage = 'hello';
    }
    // console.log(childMessage); // error
}
printMessage();

// 6. Return a value
function sum(a,b){
    return a+b;
}
const result = sum(1,2); //3
console.log(`sum: ${sum(1,2)}`);

// 7. Early return, early exit
// bad
function upgradeUser(user){
    if(user.point>10){
        //long upgrade logic...
    }
}

// good
function upgradeUser(user){
    if(user.point<=10){
        return;
    }
    // long upgrade logic...
}

// Frist-class function
// function are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions.
// can be returned by another function

// 1. Function expression
// a function declaration can be called earlier than it is defined. (hosited)
// a function expression is created  when the execution reaches it.
const print = function(){ //anonymous function or 이름을 정해줄 수도 있다
    console.log('print');
}
print();
const printAgain = print;
printAgain();

function sum(para1,para2){
    para1+para2;
}
const sumAgain= sum;
console.log(sumAgain(1,3));

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo){
    if(answer === 'love you'){
        printYes();
    }else{
        printNo();
    }
}

// anonymous function
const printYes = function(){
    console.log('yes!');
}

// named function
// 디버깅을 할 때 스택 트랙스에서 이름을 확인하기 위해서
// recursions 함수 안에서 자신 스스로의 함수를 호출할 때 -> 프로그램이 죽음
const printNo = function pirnt(){
    console.log('no!');
}

randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow Function
// always anonymous
const simplePrint = () => console.log('simplePrint!');
const add = (a,b) => a+b;
const simpleMultiple = (a,b) => {
    //do something more
    return a*b;
};// Arrow에서 긴 코드는 두 줄 이상으로도 표현 가능하나 retrun을 사용해야 함

// IIFE: Immediately Invoked Function Expression
(function hello(){
    console.log('IIFE');
})();

// Fun quiz time❤️
// function calculate(command,a,b)
// command: add, substract, divide, multiple, remainder
function calculate(command,a,b){
    switch(command){
        case 'add':
            return a+b;
        case 'substract':
            return a-b;
        case 'divide':
            return a/b;
        case 'multiply':
            return a*b;
        case 'remainder':
            return a%b;
        default:
            throw Error('unknown command');
    }
}