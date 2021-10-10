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
  let check = String(input[0]);

  let i = 0;
  while (output !== input[0]) {
    if (Number(check) < 10) {
      check = String(Number(check)) + String(Number(check));
    } else if (Number(check) >= 10) {
      if (Number(check[0]) + Number(check[1]) >= 10) {
        check = check[1] + String(Number(check[0]) + Number(check[1]))[1];
      } else if (Number(check[0]) + Number(check[1]) < 10) {
        check = check[1] + String(Number(check[0]) + Number(check[1]))[0];
      }
    }
    output = Number(check);
    i++;
  }

  console.log(i);

  process.exit();
});
