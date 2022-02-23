var input = require('fs').readFileSync('stdin', 'utf8');
var valor = input.split("\n");

// Media 2
var A2 = parseFloat(valor.shift());
var B2 = parseFloat(valor.shift());
var C2 = parseFloat(valor.shift());

var qnt2 = 2 + 3 + 5;

var media2 = (A2 * 2 + B2 * 3 + C2 * 5)/qnt2;

console.log("MEDIA = "+media2.toFixed(1));
