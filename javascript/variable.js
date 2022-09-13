// 1. Use strict
// whole-script strict mode syntax
// JavaScript is very flexible
// flexible === dangerous 즉 개발자가 실수를 하기 쉬움
// added ECMAScript 5
'Use strict';
console.log('Hello World!');

// 2. Variable, rw(read/write)
// let(add in ES6)
let globalName = 'global name';
{
let name = 'ellie';
console.log(name);
name = 'hello';
console.log(name); 
console.log(globalName);
} // block scope
console.log(name); // 지역변수 출력
console.log(globalName); // 전역변수 출력 
// : app이 시작되는 순간부터 끝날때까지 메모리에 탑재되어 있기 때문에 최소한으로 사용하는 것이좋음

// var(don't ever use this!)
// var hoisting(move, declaration from bottom to top)
// has no block scope
{
age = 4;
var age;
}
console.log(age);

// 3. Constant, r(read only)
// use const whenever possible.
// only use let if variable needs to change.
const daysInWeek= 7;
const maxNumber = 5;

// Note!
// Immutable data types: primitive types, frozen objecsts(i.e. object.freexe())
// Mutable data types: all objects by default are mutable in JS
// favor immutable data type always for a few reasons:
// - securtiy
// - thread safety
// - reduce human mistakes

// 4. Variable types
// primitive, single item: number, string, boolean, null, undefined, symbol
// object, box container
// function, first-class function

const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - special numeric values: infinity, -infinity, NaN
const infinity = 1/0;
const negativeInfinity = -1/0;
const nAn = 'not a number'/2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt(fairly new, don't ues it yet)
const bigInt = 1234567890123456789012345678901234567890n; // over(-2**53 ~ 2*53) 'n'을 마지막에 추가해줘야 함
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);
Number.MAX_SAFE_INTEGER;

// String
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; // template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

// boolean
// false: 0, null, undefined, NAN, ;;
// true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`valueL ${test}, type: ${typeof test}`);

// null
let nothing = null; // undefined이 아니라 애초에 텅텅 빈 값이라고 할당해 준 것
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x; 
console.log(`value: ${x}, type: ${typeof x}`); //할당 자체를 X

// symbol, create unique identifier for objects
// 정말~ 고유한 식별자가 필요할 때 
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); // false
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); // true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);
// symbol은 바로 출력하면 오류가 뜨기 때문에 .description을 이용해서 출력해야함

// object, real-life object, data structure
const ellie = {name: 'ellie', age: 20};
ellie.age = 21;

// 5. Dynamic typing: dynamically typed languane
let text = 'hello';
console.log(text.charAt(0)); // h
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7'+5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8'/'2';
console.log(`value: ${text}, type: ${typeof text}`);
console.log(text.charAt(0)); // TypeError!






