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

  let i = 0;
  while (i < input.length) {
    output += input[i][0] + input[i][1] + "\n";
    i++;
  }

  console.log(output);

  process.exit();
});
