//Exporting module
console.log('Exporting module');

//Blocking code
// console.log('Start fetching users');
// const res = await fetch('https://jsonplaceholder.typicode.com/users');
// console.log('Finish fetching users')

const shippingCost = 10;
export const cart = [];

export const addToCart = function (product, quantity) {
  cart.push({product, quantity});
  console.log(`${quantity} ${product} added to cart`);
}

const totalPrice = 234;
const totalQuantity = 32;

export {totalPrice, totalQuantity};

export default function (product, quantity) {
  cart.push({product, quantity});
  console.log(`${quantity} ${product} added to cart`);
}
