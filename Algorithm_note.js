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

function getMax(arr) {
  return arr.reduce((max, item) => {
    if (item > max) return item;
    return max;
  }, 0);
}

function countingSort(arr, radix) {
  const N = arr.length;
  const output = Array(N).fill(0);
  const count = Array(10).fill(0);

  // 현재 자리수를 기준으로 0~9의 개수를 센다.
  arr.forEach((item) => {
    const idx = Math.floor(item / radix) % 10;
    count[idx]++;
  });

  // count[i]가 i까지의 누적 개수가 되도록 만든다.
  count.reduce((totalNum, num, idx) => {
    count[idx] = totalNum + num;
    return totalNum + num;
  });

  // 아래 속성이 유지되도록 하기 위해 배열을 거꾸로 순회한다.
  //  1. 가장 큰 값을 먼저 본다.
  //  2. 가장 큰 값을 가장 마지막에 놓는다.
  let i = N - 1;
  while (i >= 0) {
    const idx = Math.floor(arr[i] / radix) % 10;
    // count[idx]: 현재 radix의 idx까지 누적 개수
    // count[idx]개만큼 있으므로, 인덱스는 count[idx] - 1
    output[count[idx] - 1] = arr[i];
    count[idx] -= 1;
    i--;
  }

  return output;
}