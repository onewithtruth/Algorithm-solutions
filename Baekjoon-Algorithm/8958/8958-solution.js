const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
  // input = line.split(" ").map((el) => Number(el));
  // input.push(line.split(" ").map((el) => Number(el)));
}).on("close", function () {
  let output = "";
  let check = 0;
  let checkOutput = 0;

  for (let i = 1; i < Number(input[0]) + 1; i++) {
    check = 0;
    checkOutput = 0;
    for (let n = 0; n < input[i].length; n++) {
      if (input[i][n] === "O") {
        check += 1;
        checkOutput += check;
      } else {
        check = 0;
      }
    }
    output += checkOutput + "\n";
  }

  console.log(output);

  process.exit();
});
