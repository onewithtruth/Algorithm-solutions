const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  // input.push(Number(line));
  // input = line.split(" ").map((el) => Number(el));
  input.push(line.split(" ").map((el) => Number(el)));
}).on("close", function () {
  let output;
  let minNum = input[1][0];
  let maxNum = input[1][0];

  for (let i = 0; i < input[0][0]; i++) {
    if (input[1][i] < minNum) {
      minNum = input[1][i];
    }
  }
  for (let i = 0; i < input[0][0]; i++) {
    if (input[1][i] > maxNum) {
      maxNum = input[1][i];
    }
  }
  output = `${minNum} ${maxNum}`;

  console.log(output);

  process.exit();
});
