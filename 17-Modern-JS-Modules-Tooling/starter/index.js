import add, {cart} from './shoppingCart.js'

console.log('Importing module');

// import {addToCart, totalPrice as price, totalQuantity} from './shoppingCart.js';

// ShoppingCart.addToCart('bread', 6);
// console.log(ShoppingCart.totalPrice, ShoppingCart.totalQuantity);

// import add from './shoppingCart.js'
add('pizza', 2);
add('bread', 2);
add('apple', 2);
console.log(cart)

// console.log('Start fetching')
// const res = await fetch( 'https://jsonplaceholder.typicode.com/posts');
//  const data = await res.json();
//  console.log(data);
//

/*const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  console.log(data);
  return {title: data.at(-1).title, text: data.at(-1).body}
}

// last.then(last => console.log(last));
const lastPost = await getLastPost();
console.log(lastPost);*/

import cloneDeep from 'lodash-es';

const state = {
  cart: [
    {product: 'bread', quantity: 45},
    {product: 'pizza', quantity: 5},
    {product: 'pizza', quantity: 5}
  ],
  user: {log: true}
};

const stateDeepClone = cloneDeep(state);
state.user.log = false;
console.log(stateDeepClone);
console.log('qwqwqw');

if (module.hot) {
  module.hot.accept();
}

console.log('hohas' ?? null);
console.log(cart.find(el => el.quantity >= 2))
Promise.resolve('TEST').then(x => console.log(x))

import 'core-js/stable/array/find'