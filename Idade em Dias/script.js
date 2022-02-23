var input = require("fs").readFileSync("stdin", "utf8");

let dias = parseInt(input);

let ano = parseInt(dias / 365);
dias = dias % 365;

var mes = parseInt(dias / 30);
dias = dias % 30;

console.log(`${ano} ano(s)`);
console.log(`${mes} mes(es)`);
console.log(`${dias} dia(s)`);