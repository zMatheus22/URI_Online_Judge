var input = require("fs").readFileSync("stdin", "utf8");
var num = input.split("\n");

const km = parseInt(num.shift());
const temp = 2;

const min = km * temp;

console.log(min+" minutos");
