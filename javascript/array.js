'use strict'

//Array🎉

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['🍎', '🍌'];
console.log(fruits);
console.log(fruits.length);
// ⬇️ class와 비슷하게 대괄호로 접근하되, 인덱스 번호로 점근할 수 있음
console.log(fruits[0]); // 🍎
console.log(fruits[1]); // 🍌
console.log(fruits[2]); // undefined
console.log(fruits[fruits.length-1]); // 🍌 <- 배열의 마지막 값은 보통 이와 같이 접근함

console.clear();

// 3. Looping over an array
// print all fruits
// 아래의 a, b, c는 동일한 값을 출력함
// a. for 
for(let i=0; i<fruits.length;i++){
    console.log(fruits[i]);
}

// b. for of
for(let fruit of fruits){
    console.log(fruit);
}

console.clear();

// c. forEach
// forEach(function(value, index, array){console.log(fruit, index,array)});
fruits.forEach((fruit) => console.log(fruit)); 
// anonymous함수는 arrow를 사용할 수 있음(괄호 생략)
// forEach는 배열 안에 있는 value들마다 내가 전달하고 싶은 함수를 출력함

// 4. Addition, deletaion, copy
// push: add an item to the end
fruits.push('🍓', '🍑');
console.log(fruits);

// pop: remove an item from the end 
fruits.pop(); // 뒤에서부터 하나씩 제거 (복숭아 제거)
fruits.pop(); // (딸기 제거)
console.log(fruits);

// unshift : add an item to the beginning
fruits.unshift('🍓', '🍋'); 
console.log(fruits);

// shift : remove an item from the beginnig
fruits.shift(); // 앞에서부터 하나씩 제거 (딸기 제거)
fruits.shift(); // (레몬 제거)
console.log(fruits);

// note! shift, unshift are slower than pop, push
// 뒤에서부터 추가, 제거하는 push, pop은 다른 인덱스들의 움직임 없이 새로운 값들만 적용시키면 됨 -> 빠름
// 반대로 앞에서부터 데이터를 추가, 제거한다면 인덱스가 하나씩 밀리거(unshift)나 당겨지(shift)는 등 복잡함 -> 느림

//  splice : remonve an item ny index position
fruits.push('🍓', '🍑', '🍋');
console.log(fruits);
fruits.splice(1, 2); // 시작인덱스, 지우고싶은 갯수(optional) 순서대로 숫자 작성
console.log(fruits);
fruits.splice(1); // 지우고 싶은 갯수를 작성하지 않으면
console.log(fruits); // 시작인덱스부터 끝까지 모든 데이터를 삭제함
fruits.splice(0,1,'🍏', '🍉'); // 지우고 난 다음 원하는 데이터를 삽입할 수도 있음
console.log(fruits);

// combine two arrays
const fruits2 = ['🍐', '🥥'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

//console.clear();

// 5. Searching
// find the index
// indexOf: find the index
console.log(fruits);
console.log(fruits.indexOf('🍏'));
console.log(fruits.indexOf('🍉'));
console.log(fruits.indexOf('🍓'));

// includes
console.log(fruits.includes('🍉'));
console.log(fruits.includes('🍓'));

// lastIndexOf
// console.clear();
fruits.push('🍏');
console.log(fruits);
console.log(fruits.indexOf('🍏')); // 동일한 값이 있을 때 가장 첫 번째 값의 인덱스를 출력
console.log(fruits.lastIndexOf('🍏')); // 동일한 값이 있을 때 가장 마지막 값의 인덱스를 출력

// Homework... api 정의된 곳에 가서... 정독해 오기...^^