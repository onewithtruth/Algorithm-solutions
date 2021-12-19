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

const robotPath = function (room, src, dst) {
  // TODO: 여기에 코드를 작성합니다.
  const aux = (M, N, candi, step) => {
    const [row, col] = candi;

    if (row < 0 || row >= M || col < 0 || col >= N) return;

    if (room[row][col] === 0 || room[row][col] > step) {
      room[row][col] = step;
    } else {
      return;
    }

    aux(M, N, [row + 1, col], step + 1);
    aux(M, N, [row - 1, col], step + 1);
    aux(M, N, [row, col + 1], step + 1);
    aux(M, N, [row, col - 1], step + 1);
  };

  aux(room.length, room[0].length, src, 1);

  const [r, c] = dst;

  return room[r][c] - 1;
};