var input = require("fs").readFileSync("stdin", "utf8");
var vencedor = input.split("\n");

let nome = vencedor.shift();
let salarioFixo = parseFloat(vencedor.shift());
let venda = parseFloat(vencedor.shift());
let porc = (15/100);

let ganho = venda * porc;

let ganhoF = ganho + salarioFixo;

console.log("TOTAL = R$ "+ganhoF.toFixed(2));