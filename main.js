let age = 20;
const pi = 3.14; // const — константа (нельзя переопределить)
var legacy = 'old'; // var — старый способ, имеет нюансы с областями видимости
let name = 'Olia'; // строка
let isAdmin = false; // булево
let nothing = null; // «ничего»
let unknown; // undefined — переменная объявлена, но без значения
console.log(typeof age); // "number"
console.log(typeof name);// "string"

let a = 10;
let b = 3;
console.log(a + b); // 13
console.log(a - b); // 7
console.log(a * b); // 30
console.log(a / b); // 3.333...
console.log(a % b); // 1

const user = 'Olia';
const points = 42;
const msg = `Привет, ${user}! У тебя ${points} очков.`;
console.log(msg);

const score = 75;
if (score >= 90) {
console.log('Отлично');
} else if (score >= 60) {
console.log('Хорошо');
} else {
console.log('Нужно подтянуть');
}
const result = score >= 60 ? 'зачёт' : 'незачёт';
console.log(result);