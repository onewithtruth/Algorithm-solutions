let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let a = parseInt(input[0]);
let b = parseInt(input[1]);
let bArr = String(b).split('');
let A = a * Number(bArr[2]);
let B = a * Number(bArr[1]);
let C = a * Number(bArr[0]);
let D = C*100 + B*10 + A
console.log(A);
console.log(B);
console.log(C);
console.log(D);