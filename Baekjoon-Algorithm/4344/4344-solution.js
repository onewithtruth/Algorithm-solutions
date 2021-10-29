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
  let check;
  let averageScore;
  let aboveNum;

  for (let i = 1; i <= input[0]; i++) {
    check = 0;
    for (let n = 1; n <= input[i][0]; n++) {
      check += input[i][n];
    }
    averageScore = check / input[i][0];
    aboveNum = 0;
    for (let n = 1; n <= input[i][0]; n++) {
      if (input[i][n] > averageScore) {
        aboveNum += 1;
      }
    }
    output += ((aboveNum / input[i][0]) * 100).toFixed(3) + "%\n";
  }

  console.log(output);

  process.exit();
});
