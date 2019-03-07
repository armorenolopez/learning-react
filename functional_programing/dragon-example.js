let _ = require('lodash')

let dragons = [
  {name: 'fluffykins', element: 'lightning'},
  {name: 'noomi', element: 'lightning'},
  {name: 'karo', element: 'fire'},
  {name: 'doomer', element: 'timewarp'},
]

// NON CURRIED
// let hasElement =
//   (element, obj) => obj.element === element
// let lightningDragons =
//   dragons.filter(x => hasElement('lightning', x))

// CURRIED
let hasElement =
  _.curry((element, obj) => obj.element === element)

let lightningDragons =
  dragons.filter(hasElement('lightning'))

console.log(lightningDragons)