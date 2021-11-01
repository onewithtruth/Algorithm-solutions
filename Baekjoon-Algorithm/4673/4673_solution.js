// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// let input = [];

// rl.on("line", function (line) {
//   // input.push(Number(line));
//   // input = line.split(" ").map((el) => Number(el));
//   input.push(line.split(" ").map((el) => Number(el)));
// }).on("close", function () {

//   process.exit();
// });

let output = "";
let check = [];
let nonSelfnum = 0;

for (let i = 1; i <= 10000; i++) {
  check.push(i);
}

for (let i = 1; i <= 10000; i++) {
  nonSelfnum = 0;
  for( let n = 0; n < String(i).length; n++) {
      nonSelfnum += Number(String(i)[n]);
    }
  nonSelfnum += i
  check = check.filter(function(e) {
    return e !== nonSelfnum;
  });
}

for (let i = 0; i < check.length; i++) {
  output += check[i] + "\n";
}

console.log(output);
