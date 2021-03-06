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
    output += `Case #${i + 1}: ${input[i + 1][0] + input[i + 1][1]}` + "\n";
  }

  console.log(output);

  process.exit();
});
