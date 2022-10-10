// JSON
// JavaScript Object Notation

// 1. Object to JSON
// stringify(obj)
let json = JSON.stringify(true);
console.log(json);

json =JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit ={
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    //symbol: Symbol('id'),
    jump: () => {
        console.log(`${name} can jump!`)
    },
};

json = JSON.stringify(rabbit);
console.log(json);
// 함수, js에만 있는 symbol 같은 경우에는 json에 포함되지 않는다.

json = JSON.stringify(rabbit, ["name","color","size"]);
console.log(json);
// replacer 콜백함수 사용 : 배열형태
// 좀 더 세밀한 통제를 원할 때
// 원하는 property만 json으로 변환하고 싶을 때

json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'name'? 'ellie': value;// 🤬🤬🤬
});
console.log(json);
// replacer 콜백함수 사용 : 함수형태
// 좀 더 세밀한 통제를 원할 때


// 2. JSON to Object
// parse(json)
console.clear();
json = JSON.stringify(rabbit);
const obj = JSON.parse(json);
console.log(obj);
rabbit.jump();
// obj.jump(); // 에러 발생

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate);
