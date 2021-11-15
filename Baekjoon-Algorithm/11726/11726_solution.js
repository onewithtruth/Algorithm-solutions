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

  let memo = [0, 1, 2];

  function aux(size) {
    if (memo[size] !== undefined) return memo[size];
    if (size <= 2) return memo[size];
    memo[size] = aux[size - 1] + aux[size - 2];
    return memo[size];
  }

  output = aux(input[0]) % 10007;

  console.log(output);

  process.exit();
});
