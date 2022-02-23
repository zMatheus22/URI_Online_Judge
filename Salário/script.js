var input = require("fs").readFileSync("stdin", "utf8");
var valor = input.split("\n");

let numF = parseInt(valor.shift());
let hora = parseFloat(valor.shift());

let valorHora = parseFloat(valor.shift());

let salario = (valorHora * hora);

console.log("NUMBER = "+numF);
console.log("SALARY = U$ "+salario.toFixed(2));