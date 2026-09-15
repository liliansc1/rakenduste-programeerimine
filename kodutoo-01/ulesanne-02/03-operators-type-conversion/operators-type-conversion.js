const a = 10;
const b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

// Väärtuse uuendamine
let score = 10;

score += 5;
console.log(score);

score++;
console.log(score);

// Tüübiteisendus
const stringNumber = "5";

console.log(stringNumber + 2);         // "52"
console.log(Number(stringNumber) + 2); // 7

const number = 123;
console.log(String(number));

// NaN = Not a Number
console.log(Number("tere")); // NaN