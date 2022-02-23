var input = require("fs").readFileSync("stdin", "utf8");

var num = input.split(" ");

let x = parseFloat(num.shift());
let y = parseFloat(num.shift());

let ponto = 0;

if (x == ponto && y == ponto) {
  console.log("Origem");
} else if (x > ponto && y > ponto) {
  console.log("Q1");
} else if (ponto > x && y > ponto) {
  console.log("Q2");
} else if (ponto > x && ponto > y) {
  console.log("Q3");
} else if (x > ponto && ponto > y) {
  console.log("Q4");
} else if (x == ponto && y != ponto) {
  console.log("Eixo Y");
} else if (x != ponto && y == ponto) {
  console.log("Eixo X");
}
