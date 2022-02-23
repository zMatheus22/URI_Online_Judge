var input = require("fs").readFileSync("stdin", "utf8");

var num = input.split("\n");

const km = parseInt(num.shift());
const valor = parseFloat(num.shift());

const total = km/valor;

console.log(total.toFixed(3)+" km/l");