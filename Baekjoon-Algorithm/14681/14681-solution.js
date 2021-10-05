const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
  //input = line.split(' ').map((el) => parseInt(el));
}).on("close", function () {
  const a = Number(input[0]);
  const b = Number(input[1]);

  let output;

  if (a > 0 && b > 0) {
    output = 1;
  } else if (a < 0 && b > 0) {
    output = 2;
  } else if (a < 0 && b < 0) {
    output = 3;
  } else if (a > 0 && b < 0) {
    output = 4;
  }
  console.log(output);

  process.exit();
});
