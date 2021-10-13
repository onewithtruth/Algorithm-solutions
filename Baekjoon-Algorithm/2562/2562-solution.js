const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(Number(line));
  // input = line.split(" ").map((el) => Number(el));
  // input.push(line.split(" ").map((el) => Number(el)));
}).on("close", function () {
  let output;
  let maxNum = input[0];

  for (let i = 0; i < input.length; i++) {
    if (input[i] > maxNum) {
      maxNum = input[i];
    }
  }
  output = `${maxNum}\n${input.indexOf(maxNum) + 1}`;

  console.log(output);

  process.exit();
});
