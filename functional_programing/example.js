var animals = [
  { name: 'a dog', species: 'dog'},
  { name: 'a rabbit', species: 'rabbit'},
  { name: 'a cat', species: 'cat'},
  { name: 'another dog', species: 'dog'},
  { name: 'rudi', species: 'dog'},
  { name: 'smooth', species: 'dog'},
];

// HIGHER ORDER FUNCTION
// isDog = function(animal) {
//   return animal.species === 'dog'
// }

// var dogs = animals.filter(isDog);

// MAP
// var names = animals.map(function(animal) {
//   return animal.name
// });

// ECMAScript6 // arrow functions
var names = animals.map((x) => x.name);

console.log(names);

var orders = [
  {amount: 250},
  {amount: 400},
  {amount: 100},
  {amount: 325}
]

// var totalAmount = orders.reduce(function(sum, order) {
//   return sum + order.amount
// }, 0)

// ECMAScript6
var totalAmount = orders.reduce((sum, order) => sum + order.amount, 0)

console.log(totalAmount)


// CLOSURES
var me = 'Baptiste'
function greetMe() {
  console.log('Hello, ' + me + '!')
}
me = 'Batman'
greetMe() // Hello, Batman!

// CURRYING
let _ = require('lodash')
let dragon = (name, size, element) =>
  name +' is a ' +
  size + ' dragon that breathes ' +
  element + '!'

dragon = _.curry(dragon)

let fluffykinsDragon = dragon('fluffykins')
let tinyDragon = fluffykinsDragon('tiny')

console.log(tinyDragon('lightning'))


// RECURSION

let countDownFrom = (num) => {
  if (num === 0) return;
  console.log(num)
  countDownFrom(num - 1)
}

countDownFrom(10)

let categories = [
  { id: 'animals', 'parent': null},
  { id: 'mammals', 'parent': 'animals'},
  { id: 'cats', 'parent': 'mammals'},
  { id: 'dogs', 'parent': 'mammals'},
  { id: 'chihuahua', 'parent': 'dogs'},
  { id: 'labrador', 'parent': 'dogs'},
  { id: 'persian', 'parent': 'cats'},
  { id: 'siamese', 'parent': 'cats'},
]

let makeTree = (categories, parent) => {
  let node = {}
  categories
    .filter(c => c.parent === parent)
    .forEach(c => node[c.id] = makeTree(categories, c.id))
    // in each forEach, we are looking for the elements 
    // that have as parent the id of the previous one
  return node
}

console.log(
  JSON.stringify(
    makeTree(categories, null)
    , null, 2)
)

// PROMISE
function loadImage(url) {
  return new Promise((resolve, reject) => {
    // resolve and reject are functions
    // resolve if success
    // reject if error
    let image = new Image()

    image.onload = function() {
      resolve(image)
    }

    image.onerror = function () {
      let msg = 
        'Could not load image at ' + url
      reject(new Error(msg))
    }

    image.src = url
  })
}

let addImg = (src) => {
  let imgElement = 
    document.createElement("img")
  imgElement.src = src
  document.body.appendChild(imgElement)
}

// Array of promises
Promise.all([
  loadImage('images/cat1.jpg'),
  loadImage('images/cat2.jpg'),
  loadImage('images/cat3.jpg')
]).then(images) => {
  console.log(images)
  images.forEach(img => addImg(img.src))
}

// loadImage('images/cat1.jpg').then((img1) => {
//   addImg(img1.src)
//   loadImage('images/cat2.jpg').then((img2) => {
//     addImg(img2.src)
//     loadImage('images/cat3.jpg').then((img3) => {
//       addImg(img3.src)
//     })
//   })
// })
