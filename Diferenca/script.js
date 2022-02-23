var input = require("fs").readFileSync("stdin", "utf8");

var valor = input.split("\n");

var A = parseInt(valor.shift());
var B = parseInt(valor.shift());
var C = parseInt(valor.shift());
var D = parseInt(valor.shift());

var dif = A * B - C * D;

console.log("DIFERENCA = "+dif);