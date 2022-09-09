let globalMessage = 'global'; // global variable
function printMessage(){
    let message = 'hello';
    console.log(message); //local variable
    console.log(globalMessage);
    function printAnother(){
        console.log(message);
        let childMessage = 'hello';
    }
}
printMessage();

//bad
function upgradeUser(user){
    if(user.point>10){
        //long upgrade logic...
    }
}

//good
function upgradeUser(user){
    if(user.point<=10){
        return;
    }
    // long upgrade logic...
}

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

const simplePrint = () => console.log('simplePrint!');
const add = (a,b) => a+b;
const simpleMultiple = (a,b) => {
    //do something more
    return a*b;
};

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


/* 내가 쓴 코딩
function add(a,b){
    a+b;
}

function substract(a,b){
    a-b;
}

function divide(a,b){
    a/b;
}

function multiple(a,b){
    a*b;
}

function remainder(a,b){
    a%b;
}


function calculate(command, a, b){
    if(command===add){
        console.log(add(a,b));
    }
    else if(command===substract){
        console.log(substract(a,b))
    }
    else if(command===divide){
        console.log(divide(a,b))
    }
    else if(command===multiple){
        console.log(multiple(a,b))
    }
    else if(command===remainder){
        console.log(remainder(a,b))
    }
}
*/