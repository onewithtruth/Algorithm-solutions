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
  for(let i = 1; i <= 9; i++) {
    console.log(`${a} * ${i} = ${a*i}`)
  }

  process.exit();
});
