var input = require("fs").readFileSync("stdin", "utf8");
var num = input.split("\n");

let linha1 = num.shift().split(" ");
let linha2 = num.shift().split(" ");

let cod1 = parseInt(linha1.shift());
let qntd1 = parseInt(linha1.shift());
let valor1 = parseFloat(linha1.shift());

let cod2 = parseInt(linha2.shift());
let qntd2 = parseInt(linha2.shift());
let valor2 = parseFloat(linha2.shift());

let cal = (valor1 * qntd1) + (valor2 * qntd2);


console.log("VALOR A PAGAR: R$ "+cal.toFixed(2));