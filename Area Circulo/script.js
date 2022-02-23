var input = require('fs').readFileSync('stdin', 'utf8');
var valor = input.split("\n");

// area = π . raio²;

var pi = 3.14159;
var raio = parseFloat(valor.shift());

var area = pi * Math.pow(raio,2);

console.log("A="+area.toFixed(4));