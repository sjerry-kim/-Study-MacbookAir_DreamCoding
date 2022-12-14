'use strict'

//Array๐

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['๐', '๐'];
console.log(fruits);
console.log(fruits.length);
// โฌ๏ธ class์ ๋น์ทํ๊ฒ ๋๊ดํธ๋ก ์ ๊ทผํ๋, ์ธ๋ฑ์ค ๋ฒํธ๋ก ์ ๊ทผํ  ์ ์์
console.log(fruits[0]); // ๐
console.log(fruits[1]); // ๐
console.log(fruits[2]); // undefined
console.log(fruits[fruits.length-1]); // ๐ <- ๋ฐฐ์ด์ ๋ง์ง๋ง ๊ฐ์ ๋ณดํต ์ด์ ๊ฐ์ด ์ ๊ทผํจ

console.clear();

// 3. Looping over an array
// print all fruits
// ์๋์ a, b, c๋ ๋์ผํ ๊ฐ์ ์ถ๋ ฅํจ
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
// anonymousํจ์๋ arrow๋ฅผ ์ฌ์ฉํ  ์ ์์(๊ดํธ ์๋ต)
// forEach๋ ๋ฐฐ์ด ์์ ์๋ value๋ค๋ง๋ค ๋ด๊ฐ ์ ๋ฌํ๊ณ  ์ถ์ ํจ์๋ฅผ ์ถ๋ ฅํจ

// 4. Addition, deletaion, copy
// push: add an item to the end
fruits.push('๐', '๐');
console.log(fruits);

// pop: remove an item from the end 
fruits.pop(); // ๋ค์์๋ถํฐ ํ๋์ฉ ์ ๊ฑฐ (๋ณต์ญ์ ์ ๊ฑฐ)
fruits.pop(); // (๋ธ๊ธฐ ์ ๊ฑฐ)
console.log(fruits);

// unshift : add an item to the beginning
fruits.unshift('๐', '๐'); 
console.log(fruits);

// shift : remove an item from the beginnig
fruits.shift(); // ์์์๋ถํฐ ํ๋์ฉ ์ ๊ฑฐ (๋ธ๊ธฐ ์ ๊ฑฐ)
fruits.shift(); // (๋ ๋ชฌ ์ ๊ฑฐ)
console.log(fruits);

// note! shift, unshift are slower than pop, push
// ๋ค์์๋ถํฐ ์ถ๊ฐ, ์ ๊ฑฐํ๋ push, pop์ ๋ค๋ฅธ ์ธ๋ฑ์ค๋ค์ ์์ง์ ์์ด ์๋ก์ด ๊ฐ๋ค๋ง ์ ์ฉ์ํค๋ฉด ๋จ -> ๋น ๋ฆ
// ๋ฐ๋๋ก ์์์๋ถํฐ ๋ฐ์ดํฐ๋ฅผ ์ถ๊ฐ, ์ ๊ฑฐํ๋ค๋ฉด ์ธ๋ฑ์ค๊ฐ ํ๋์ฉ ๋ฐ๋ฆฌ๊ฑฐ(unshift)๋ ๋น๊ฒจ์ง(shift)๋ ๋ฑ ๋ณต์กํจ -> ๋๋ฆผ

//  splice : remonve an item ny index position
fruits.push('๐', '๐', '๐');
console.log(fruits);
fruits.splice(1, 2); // ์์์ธ๋ฑ์ค, ์ง์ฐ๊ณ ์ถ์ ๊ฐฏ์(optional) ์์๋๋ก ์ซ์ ์์ฑ
console.log(fruits);
fruits.splice(1); // ์ง์ฐ๊ณ  ์ถ์ ๊ฐฏ์๋ฅผ ์์ฑํ์ง ์์ผ๋ฉด
console.log(fruits); // ์์์ธ๋ฑ์ค๋ถํฐ ๋๊น์ง ๋ชจ๋  ๋ฐ์ดํฐ๋ฅผ ์ญ์ ํจ
fruits.splice(0,1,'๐', '๐'); // ์ง์ฐ๊ณ  ๋ ๋ค์ ์ํ๋ ๋ฐ์ดํฐ๋ฅผ ์ฝ์ํ  ์๋ ์์
console.log(fruits);

// combine two arrays
const fruits2 = ['๐', '๐ฅฅ'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

//console.clear();

// 5. Searching
// find the index
// indexOf: find the index
console.log(fruits);
console.log(fruits.indexOf('๐'));
console.log(fruits.indexOf('๐'));
console.log(fruits.indexOf('๐'));

// includes
console.log(fruits.includes('๐'));
console.log(fruits.includes('๐'));

// lastIndexOf
// console.clear();
fruits.push('๐');
console.log(fruits);
console.log(fruits.indexOf('๐')); // ๋์ผํ ๊ฐ์ด ์์ ๋ ๊ฐ์ฅ ์ฒซ ๋ฒ์งธ ๊ฐ์ ์ธ๋ฑ์ค๋ฅผ ์ถ๋ ฅ
console.log(fruits.lastIndexOf('๐')); // ๋์ผํ ๊ฐ์ด ์์ ๋ ๊ฐ์ฅ ๋ง์ง๋ง ๊ฐ์ ์ธ๋ฑ์ค๋ฅผ ์ถ๋ ฅ

// Homework... api ์ ์๋ ๊ณณ์ ๊ฐ์... ์ ๋ํด ์ค๊ธฐ...^^