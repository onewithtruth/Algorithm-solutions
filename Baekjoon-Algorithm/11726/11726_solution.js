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
    for(let i = 3; i <= input[0]; i++) {
      memo[i] = (memo[i - 1] + memo[i - 2]) % 10007;
    }
    return memo[size];
  }

  output = aux(input[0])

  console.log(output);

  process.exit();
});
