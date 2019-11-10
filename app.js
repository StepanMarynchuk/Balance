"use strict"

const products = [
    'apple',
    'apricot',
    'avocado',
    'banana',
    'blackberry',
    'blackcurrant',
    'blueberry',
    'boysenberry',
    'cherry',
    'coconut',
    'fig',
    'grape',
    'grapefruit',
    'kiwifruit',
    'lemon',
    'lime',
    'lychee',
    'mandarin',
    'mango',
    'melon',
    'nectarine',
    'orange',
    'papaya',
    'passion fruit',
    'peach',
    'pear',
    'pineapple',
    'plum',
    'pomegranate',
    'quince',
    'raspberry',
    'strawberry',
    'watermelon',
  ];

function getRandomFloat(min,max) {
    return Math.floor (Math.random()*(max-min))+min+Math.floor(Math.random()*100)/100;
}

function Product(name, price) {
    this.name=name;
    this.price=price;
}

function displayProducts() {
const ITEMS = products.map(name => new Product(name, getRandomFloat(7, 50)));

const items = ITEMS
  .map(({name, price}) => `<div class="product" data-price="${price}"
  data-name="${name}">
  <h2>${name}</h2>
  <p>${price} грн./кг</p>
  </div>`)
  .join('');
console.log ('items', items);
document.querySelector('#products').innerHTML = items;

document.querySelectorAll('.product').forEach(pr => pr.addEventListener('click', () => calcPrice(pr)))}

window.onload = displayProducts();