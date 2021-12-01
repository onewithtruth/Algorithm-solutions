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
  

  process.exit();
});


// naive solution
// const balancedBrackets = function (str) {
//   const stack = [];
//   const opener = '(';
//   const closer = ')';

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === opener) {
//       stack.push(str[i]);
//     } else if (str[i] === closer) {
//       const top = stack.pop();
//       if (top !== opener) {
//         return false;
//       }
//     }
//   }

//   return stack.length === 0;
// };

const balancedBrackets = function (str) {
  const stack = [];
  const opener = {
    '{': '}',
    '[': ']',
    '(': ')',
  };
  const closer = '}])';

  for (let i = 0; i < str.length; i++) {
    if (str[i] in opener) {
      stack.push(str[i]);
    } else if (closer.includes(str[i])) {
      const top = stack.pop();
      const pair = opener[top];
      if (pair !== str[i]) {
        return false;
      }
    }
  }

  return stack.length === 0;
};