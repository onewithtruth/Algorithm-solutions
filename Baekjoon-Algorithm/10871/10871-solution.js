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
  let output = "";

  for (let i = 0; i < input[0][0]; i++) {
    if (input[1][i] < input[0][1]) {
      output += input[1][i] + " ";
    }
  }

  console.log(output);

  process.exit();
});
