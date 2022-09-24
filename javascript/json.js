// JSON
// JavaScript Object Notation

// 1. Object to JSON
// stringify
let json = JSON.stringify(true);
console.log(json);

json =JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit ={
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    symbol: Symbol('id'),
    jump: () => {
        console.log(`${name} can jump!`)
    },
};

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ["name","color", "size"]);
console.log(json);

son = JSON.stringify(rabbit, );
console.log(json);

// 2. JSON to Object
// parse(json)