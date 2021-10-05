let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let a = Number(input[0]);
let b = Number(input[1]);

let output;
if (a > 0 && b > 0) {
  output = 1;
} else if (a < 0 && b > 0) {
  output = 2;
} else if (a < 0 && b < 0) {
  output = 3;
} else if (a > 0 && b > 0) {
  output = 4;
}
console.log(output);
