//Example: transforming and searching a list of products.

const products = [
  { name: "Telefon", price: 500 },
  { name: "Arvuti", price: 1200 },
  { name: "Hiir", price: 30 }
];

//massiiv ainult toodete nimedega
const productNames = products.map(product => product.name);
console.log(productNames);

//tooted, mille hind on üle 100 euro
const expensiveProducts = products.filter(product => product.price > 100);
console.log(expensiveProducts);

//leiame toote nime järgi
const foundProduct = products.find(product => product.name === "Hiir");
console.log(foundProduct);