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
  let maxScore = 0;
  let check = 0;

  for (let i = 0; i < input[0][0]; i++) {
    if (input[1][i] > maxScore) {
      maxScore = input[1][i];
    }
  }

  for (let i = 0; i < input[0][0]; i++) {
    check += (input[1][i] / maxScore) * 100;
  }

  output = check / input[0][0];

  console.log(output.toFixed(3));

  process.exit();
});
