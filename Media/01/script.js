var input = require('fs').readFileSync('stdin', 'utf8');
var valor = input.split("\n");

// Media 1
var A1 = parseFloat(valor.shift());
var B1 = parseFloat(valor.shift());

var qnt1 = 3.5 + 7.5;

var media1 = (A1 * 3.5 + B1 * 7.5 )/qnt1;

console.log("MEDIA = "+media1.toFixed(5));