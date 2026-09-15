const users = [
  { id: 1, name: "Mari", age: 22, active: true },
  { id: 2, name: "Jüri", age: 17, active: false },
  { id: 3, name: "Kati", age: 31, active: true },
  { id: 4, name: "Martin", age: 19, active: false },
  { id: 5, name: "Laura", age: 26, active: true }
];

//3.1 kuvan kõikide kasutajate nimed
users.forEach(user => {
  console.log(user.name);
});

//3.2 leian kõik aktiivsed kasutajad, st uus massiiv kelle active väärtus on true
const activeUsers = users.filter(user => user.active);

console.log(activeUsers);


//3.3 leian kõik vähemalt 18-aastased kasutajad
const adultUsers = users.filter(user => user.age >= 18);

console.log(adultUsers);

//3.4 loon uue massiivi, mis sisaldab ainult kasutajate nimesid.
//map võtab igast kasutaja objektist name väärtuse.
const userNames = users.map(user => user.name);

console.log(userNames);


//3.5 leian kasutaja, kelle id on 3.
//find tagastab esimese kasutaja, kelle id vastab tingimusele.
const foundUser = users.find(user => user.id === 3);

console.log(foundUser);


//3.6 funktsioon tagastab kasutaja staatuse.
//kui active on true, tagastab "Aktiivne", muidu "Mitteaktiivne".
function getUserStatus(user) {
  if (user.active) {
    return "Aktiivne";
  } else {
    return "Mitteaktiivne";
  }
}

console.log(getUserStatus(users[0]));


//3.7 arrow function loob kasutajale tervituse.
//template literal võimaldab lisada nime ja vanuse teksti sisse.
const getGreeting = (user) => {
  return `Tere, ${user.name}! Sa oled ${user.age} aastat vana.`;
};

console.log(getGreeting(users[0]));


//3.8 destructuring võtab kasutaja objektist välja nime ja vanuse
const { name, age } = users[0];

console.log(name);
console.log(age);


//3.9 loob uue kasutaja ja lisab selle uude massiivi.
//users kopeerib olemasolevad kasutajad, seega esialgne users massiiv ei muutu.
const newUser = {
  id: 6,
  name: "Karl",
  age: 24,
  active: true
};

const newUsers = [...users, newUser];

console.log(newUsers);

//3.10 lisan esimesele kasutajale address omaduse.
users[0].address = {
  city: "Tallinn"
};

//kuvan linna optional chaining'u abil.
console.log(users[0].address?.city);

//kui kasutajal linna ei ole, kuvan "Linn puudub".
console.log(users[1].address?.city ?? "Linn puudub");


//3.11 käin kõik kasutajad forEach abil läbi.
//kuvab iga kasutaja nime ja getUserStatus funktsioonist saadud staatuse.
users.forEach(user => {
  console.log(`${user.name} – ${getUserStatus(user)}`);
});


//3.12 sorteerin kasutajad vanuse järgi noorimast vanimani.
users.sort((a, b) => a.age - b.age);

console.log(users);