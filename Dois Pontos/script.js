var input = require("fs").readFileSync("stdin", "utf8");
var num = input.split("\n");

let linha1 = num.shift().split(" ");
let linha2 = num.shift().split(" ");

let x1 = linha1.shift();
let y1 = linha1.shift();

let x2 = linha2.shift();
let y2 = linha2.shift();

let a = Math.pow(x2 - x1, 2);
let b = Math.pow(y2 - y1, 2);

let dist = Math.sqrt( a + b);

console.log(dist.toFixed(4));
