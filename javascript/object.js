// Object
// one of the JavaScript;s data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScripts are instance of Object
// Object = {key : value}; 오브젝트는 key와 value의 집합체이다

// 1. Literals and properties
const obj1={}; //'object literal' syntax
const obj2=new Object(); // 'object constructor' syntax

function print(person){
    console.log(person.name);
    console.log(person.age);
}

const ellie =  {name: 'ellie', age: 4};
print(ellie);

//with JavaScript magic (dynamically typed language)
// can add properties later
ellie.hasJob = true;
console.log(ellie.hasJob);

// can delete properties later
delete ellie.hasJob;
console.log(ellie.hasJob);

// 2. Computed properties
// key should be always string
console.log(ellie.name); // dot을 사용하는 보통의 방법
console.log(ellie['name']); // 대괄호 []를 사용한 Computed properties
ellie['hasJob']=true; // 
console.log(ellie.hasJob);

function printValue(obj, key){
    console.log(obj.key); // undefined
    console.log(obj[key]); // correct code!
}
printValue(ellie, 'name');
printValue(ellie, 'age');

// 3. Properties value shorthand
const person1 = { name: 'bob', age: 2};
const person2 = { name: 'steve', age: 3};
const person3 =  { name: 'dave', age: 4};
const person4 = new Person('ellie',30); // 객체를 만드는 것 처럼 함수를 줄 수 있음
console.log(person4);

// 4. Constructor function
function Person(name, age){ // 다른 계산 없이 순수하게 object만 사용하는 함수의 이름은 대문자로 시작함
    // this = {}; // 생략됨
    this.name = name; // class에서 Constructor에서 했던 것처럼 작성
    this.age = age;
    // return this; // 생략됨
}

// 5. in operator : property existence check(key in obj)
console.log('name' in ellie); // true
console.log('age' in ellie); // true
console.log('random' in ellie); // false
console.log(ellie.random); // undefined

// 6. for..in vs for..of
// for (key in obj) : 오브젝트에 사용
console.clear(); // 이전의 것들이 지워짐(console was cleared)
for (key in ellie){
    console.log(key);
}

// for (value of iterable 반복되는)
// 오브젝트가 아닌 배열 리스트.... 순차적으로 반복되는....ㅏ애들에 사용
const array = [1, 2, 4, 5];
for(value of array){
    console.log(value);
}
/* 위의 for of와 동일
for(let i=0; i<array.length; i++){
    console.log(array[i]);
}
*/

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = {name: 'ellie', age: '20'}; // 오브젝트 생성
const user2 = user; // user와 user2가 동일한 ref를 가리키고 있음
user2.name = 'coder'; // 따라서 user2의 name 값을 바꾸면
console.log(user); // user의 name 값 또한 바뀜

// 이것이 아니라 말 그대로 object를 복제해서 사용하고 싶다면?

// old way
const user3 = {};
for (key in user){
    user3[key] = user[key];
}
console.clear();
console.log(user3);

// new way
const user4 = {};
Object.assign(user4, user);
// const user4 = Object.assign({},user);
console.log(user4);

// another example
const fruit1 =  {color: 'red'};
const fruit2 =  {color: 'blue', size: 'big'};
const mixed = Object.assign({},fruit1, fruit2); // 뒤에 작성된 아이일수록 앞에 동일한 property가 있다면 뒤의 것으로 덧씌워짐
console.log(mixed.color);
console.log(mixed.size);