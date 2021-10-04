let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split(" ");
let a = parseInt(input[0]);
let output;
if (a <= 100 && a >= 90) {
  output = "A";
} else if (a <= 89 && a >= 80) {
  output = "B";
} else if (a <= 79 && a >= 70) {
  output = "C";
} else if (a <= 69 && a >= 60) {
  output = "D";
} else if (a < 60) {
  output = "F";
}
console.log(output);
