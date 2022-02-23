
var input = require('fs').readFileSync('stdin', 'utf8');

// var [x, y] = input.split("\n").map(item => parseInt(item));
// var soma = x + y
// console.log(soma);


var valor = input.split("\n").map(item => parseInt(item));

var A = valor.shift();
var B = valor.shift();

var soma = A + B

console.log("X = ",soma);