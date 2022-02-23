var input = require("fs").readFileSync("stdin", "utf8");

let sec = parseInt(input);

let hora = parseInt(sec / 3600);
sec = sec % 3600;

let min = parseInt(sec / 60);
sec = sec % 60;

console.log(`${hora}:${min}:${sec}`);