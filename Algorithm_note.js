// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// let input = [];

// rl.on("line", function (line) {
//   input.push(Number(line));
//   // input = line.split(" ").map((el) => Number(el));
//   // input.push(line.split(" ").map((el) => Number(el)));
// }).on("close", function () {
  

//   process.exit();
// });

////////////////////////////////////

const LCS = function (str1, str2) {
  const M = str1.length;
  const N = str2.length;
  const memo = [];
  // 중복 계산을 방지하기 위해 left, right
  for (let i = 0; i < M + 1; i++) memo.push(Array(N + 1).fill(-1));

  const compareOneByOne = (left, right, len) => {
    if (memo[left][right] !== -1) return memo[left][right];

    if (left === str1.length || right === str2.length) return 0;

    if (str1[left] === str2[right]) {
      memo[left][right] = 1 + compareOneByOne(left + 1, right + 1, len + 1);
      return memo[left][right];
    }

    memo[left][right] = Math.max(
      compareOneByOne(left + 1, right, len), //
      compareOneByOne(left, right + 1, len)
    );
    return memo[left][right];
  };

  return compareOneByOne(0, 0, 0);
};
