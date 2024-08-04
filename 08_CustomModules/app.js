// let func  = require('./index')                       //* i can access functions inside func using dot notation
let {Addition,SubPration,Name} = require('./index')

// let add = require('./index')

let Val = Addition(100,200)

let ValSub = SubPration(1000,200)

console.log(Name);

console.log(Val);
console.log(ValSub);
// console.log(add);