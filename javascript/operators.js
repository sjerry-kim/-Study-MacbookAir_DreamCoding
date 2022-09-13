// 1. String concatenation
console.log('my'+'cat');
console.log('1'+2);
console.log(`string literals: 

''''
1 + 2 = ${1+2}`);

console.log('ellie\'s \nbook'); // 쌍따옴표는 괜찮지만 따옴표는 이렇게 백슬러시를 넣어줘야 함
// 특수문자 관련된 내용 정리 필요

// 2. Numeric operators
console.log(1+1); // add
console.log(1-1); // substract
console.log(1/1); // devide
console.log(1*1); // multiply
console.log(1%1); // remainder
console.log(1**1); // exponentiation

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter +1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);

const postIncrement = counter++;
// postIncrement = counter;
// counter = couter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);

const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);

const postDecrement = counter--;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`);

// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y; // x = x - y;
x *= y; // x = x * y;
x /= y; // x = x / y;

// 5. Comparison operators
console.log(10 < 5); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6) // greater than or equal

// 6. Logical operators: ||(or), &&(and), !(not)
const value1 = false;
const value2 = 4 < 2;

// || (or), finds the first truthy value
// 하나라도 true면 true이기 때문에, 첫 번째 값이 true면 비교를 멈춤
// 따라서 가장 무거운 계산을 뒤쪽에 두어야 효율적인 코드라고 할 수 있음
console.log(`or: ${value1 || value2 || check()}`);

// && (and), finds the first falsy value
console.log(`and: ${value1 && value2 && check()}`);
// 모든 값이 true여야 true
// 따라서 false 값을 만나면 비교를 멈춤
// 마찬가지로 가장 무거운 코드를 뒤쪽에 두어야 효율적임
// &&는 간단한 null체크를 할 때 자주 사용되기도 함
// often used to compress long if-statement
// nullableObject && nullableObject.something
//if (nullableObject != null){
//    nullableObject.something;
//}

// ! (not)
console.log(!value1);

function check(){
    for(let i=0; i<10; i++){
        //wasting time
        console.log('😱')
    }
    return true;
}

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversation(타입을 변경해서 검사)
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversation(타입까지 꼼꼼하게 검사)
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
const ellie1 = {name: 'ellie'};
const ellie2 = {name: 'ellie'};
const ellie3 = ellie1;
console.log(ellie1==ellie2); // false 각각 다른 reference가 있기 때문에
console.log(ellie1===ellie2); // false 타입과 상관 없이 reference 값이 다르기 때문에
console.log(ellie1===ellie3); // true

// equlity - puzzler
console.log(0==false); // true
console.log(0===false); // false
console.log(''==false); // true
console.log(''===false); // false
console.log(null == undefined); // ture
console.log(null===undefined); // false

// 8. Conditional operators: if
// if, else if, else
const name = 'coder';
if(name==='ellie'){
    console.log('Welcome, Ellie!');
}else if(name==='coder'){
    console.log('You are amazing coder');
}else{
    console.log('unknown');
}

// 9. Ternary operators: ?
// condition? value1: value2;
console.log(name === 'ellie'? 'yes':'no'); // no

// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = 'IE';
switch(browser){
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('love you!');
        break;
    default: 
        console.log('same all!');
        break;
}

// 11. Loops
// while loop, while the condition is truthy,
// body codes is execured.
let i = 3;
while(i>0){ // false가 나올 때까지 무한 반복
    console.log(`while: ${i}`);
    i--;
}

// do while loops, body code is executed first,
// then check the condition.
do{
    console.log(`do while: ${i}`);
    i--;
}while(i>0);

// for loops, for(begin; condition; step)
for(i=3; i>0; i--){
    console.log(`for ${i}`);
}

for(let i=3; i>0; i = i-2){
    // inline variable declaration 지역변수 선언
    console.log(`inline variable for: ${i}`);
}

// nested loops
for(let i=0; i<10; i++){
    for(let j=0; j<10; j++){
        console.log(`i: ${i}, j:${j}`);
    }
}

// break, continue
// break: 반복을 완전히 끝내는 것
// continue : 지금 것만 생략하고 다음 단계로 넘어가는 것
// Q1. iterate from 0 to 10 and print only even numbers (use continue)
for(let i=0; i<=10; i++){
    if(i===0||i%2===1){
        continue;
    }console.log(i);
}
// Q2. interate form 0 to 10 and print number util reaching 8(use break)
for(let i=0; i<=10;i++){
    if(i>8){
        break;
    }console.log(i);
}