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
  let check = {};

  for (let i = 0; i < 10; i++) {
    if (check[input[i] % 42] === undefined) {
      check[input[i] % 42] = 1;
    } else {
      check[input[i] % 42] += 1;
    }
  }

  output = Object.keys(check);

  console.log(output.length);

  process.exit();
});
