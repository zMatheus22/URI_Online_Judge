var input = require("fs").readFileSync("stdin", "utf8");
var num = input.split(" ");

let a = parseInt(num.shift());
let b = parseInt(num.shift());
let c = parseInt(num.shift());

let maiorAB = (a + b + Math.abs(a - b)) / 2;
let maiorXC = (c + maiorAB + Math.abs(c - maiorAB)) / 2;

console.log(maiorXC+" eh o maior");