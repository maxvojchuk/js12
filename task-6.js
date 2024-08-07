const toys = [
  { category: "toy", name: "car", price: 50, quantity: 100 },
  { category: "toy", name: "doll", price: 200, quantity: 50 },
  { category: "toy", name: "puzle", price: 40, quantity: 60 },
];
const calculateTotalPrice = (allProducts, productName) => {
  let sum = 0;
  for (let product of allProducts) {
    if (product.name === productName) {
      sum = product.price * product.quantity;
    }
  }
  return sum;
};
console.log(calculateTotalPrice(toys, "car"));
console.log(calculateTotalPrice(toys, "doll"));
console.log(calculateTotalPrice(toys, "puzle"));
