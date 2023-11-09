console.log({}.prototype === {}.prototype); // false
// Объект {} не имеет свойства "prototype"

function sayHello() {};
console.log(sayHello.prototype === sayHello.__proto__); // false
// У функций есть свойство "prototype", но оно не равняется их прототипу "__proto__".

function sayHello() {};
function sayGoodBye() {};
console.log(sayHello.__proto__ === sayGoodBye.__proto__); // true
// Все функции имеют "__proto__".

console.log(sayHello.prototype === sayGoodBye.prototype); // true
// Свойство "prototype" в функциях sayHello и sayGoodBye указывает на один и тот же объект.

let arrowFunc = () => {};
console.log(arrowFunc.prototype === Object.prototype); // false
// Стрелочные функции не имеют свойства "prototype".

let age = 22;
console.log(age.prototype === Number.prototype); // false
// Примитивы, такие как числа, не имеют свойства "prototype".

console.log(age.__proto__ === Number.prototype); // true
// Прототип числа (объекта) указывает на Number.prototype.

function Test() {}
console.log(Test.__proto__ === Function.prototype); // true
// Функции имеют прототип Function.prototype.

let num = 77;
console.log(num.__proto__ === Number.prototype); // true
// Прототип числа (объекта) указывает на Number.prototype.