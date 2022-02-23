var input = require("fs").readFileSync("stdin", "utf8");

var num = input.split("\n");

let R = num.shift();

let pi = 3.14159;

let valor = (4/3) * pi * Math.pow(R, 3);


console.log("VOLUME = "+valor.toFixed(3));