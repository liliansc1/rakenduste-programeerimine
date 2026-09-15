//Example: displaying a user profile with missing information.

const user = {
  name: "Mari",
  age: 22
};

console.log(`Nimi: ${user.name}`);
console.log(`Vanus: ${user.age}`);
console.log(`Linn: ${user.address?.city ?? "Linn puudub"}`);