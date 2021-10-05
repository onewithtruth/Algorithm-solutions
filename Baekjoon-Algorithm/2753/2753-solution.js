let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split(" ");
let a = parseInt(input[0]);
let output;
if (a%4 === 0 && a%100 !== 0) {
  output = 1;
} else if (a%4 === 0 && a%400 === 0) {
  output = 1;
} else {
  output = 0;
}
console.log(output);