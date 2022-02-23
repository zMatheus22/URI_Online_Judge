var input = require("fs").readFileSync("stdin", "utf8");

let num = parseInt(input);

for (var i = 1; i <= num; i++) {
  if (i % 2 == 1) {
    console.log(i);
  }
}
