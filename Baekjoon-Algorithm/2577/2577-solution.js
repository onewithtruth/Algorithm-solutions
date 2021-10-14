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
  let output = "";
  let checkNum = String(input[0] * input[1] * input[2]);

  for (let i = 0; i < 10; i++) {
    let check = 0;
    for (let n = 0; n < checkNum.length; n++) {
      if (checkNum[n] === String(i)) {
        check += 1;
      }
    }
    output += check + "\n";
  }

  console.log(output);

  process.exit();
});
