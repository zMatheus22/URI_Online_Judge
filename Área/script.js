var input = require("fs").readFileSync("stdin", "utf8");
var num = input.split(" ");

let A = parseFloat(num.shift()); 
let B = parseFloat(num.shift());  
let C = parseFloat(num.shift()); 

let pi = 3.14159

// (BASE * ALTURA)/2
let TRIANGULO = (A*C)/2

// PI * (RARIO)²
let CIRCULO = pi * Math.pow(C,2);

//(BASE1 + BASE2)/2 x ALTURA
let TRAPEZIO = (A + B)/2 * C;

// LADO * LADO 
let QUADRADO = Math.pow(B,2)

// LADO * ALTURA
let RETANGULO = A * B;

console.log("TRIANGULO: "+TRIANGULO.toFixed(3));
console.log("CIRCULO: "+CIRCULO.toFixed(3));
console.log("TRAPEZIO: "+TRAPEZIO.toFixed(3));
console.log("QUADRADO: "+QUADRADO.toFixed(3));
console.log("RETANGULO: "+RETANGULO.toFixed(3));