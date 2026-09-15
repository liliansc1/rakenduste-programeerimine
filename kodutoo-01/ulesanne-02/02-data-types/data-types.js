const text = "Tere";
const number = 25;
const isActive = true;
const user = { name: "Mari", age: 22 };
const fruits = ["õun", "banaan", "pirn"];

console.log(typeof text);
console.log(typeof number);
console.log(typeof isActive);
console.log(typeof user);
console.log(typeof fruits);

// null ja undefined
const emptyValue = null;
let unknownValue;

console.log(emptyValue);
console.log(unknownValue);

console.log(typeof null); 
console.log(typeof []);   

// Kontrollime, kas väärtus on massiiv
console.log(Array.isArray(fruits)); // true

// String ja number on erinevad andmetüübid
console.log(typeof "5"); // string
console.log(typeof 5);   // number