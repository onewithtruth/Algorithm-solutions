const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  //input.push(line);
  input = line.split(" ").map((el) => parseInt(el));
}).on("close", function () {
  const a = Number(input[0]);
  const b = Number(input[1]);

  let h, m;

  if (a < 1 && b < 45) {
    h = 23;
    m = b + 15;
  } else if (a >= 1 && b < 45) {
    h = a - 1;
    m = b + 15;
  } else {
    h = a;
    m = b - 45;
  }

  console.log(`${h} ${m}`);

  process.exit();
});
