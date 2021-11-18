// 08_largestProductOfThree
// largestProductOfThree
// 문제
// 정수를 요소로 갖는 배열을 입력받아 3개의 요소를 곱해 나올 수 있는 최대값을 리턴해야 합니다.

// 입력
// 인자 1 : arr
// number 타입을 요소로 갖는 임의의 배열
// 출력
// number 타입을 리턴해야 합니다.
// 주의사항
// 입력으로 주어진 배열은 중첩되지 않은 1차원 배열입니다.
// 배열의 요소는 음수와 0을 포함하는 정수입니다.
// 배열의 길이는 3 이상입니다.
// 입출력 예시
// let output = largestProductOfThree([2, 1, 3, 7]);
// console.log(output); // --> 42 (= 2 * 3 * 7)

// output = largestProductOfThree([-1, 2, -5, 7]);
// console.log(output); // --> 35 (= -1 * -5 * 7)

// !!first trial
// const largestProductOfThree = function (arr) {
//   // TODO: 여기에 코드를 작성합니다.
//   // 경우의 수 1: + * + * +
//   // 경우의 수 2: + * - * -
//   // 경우의 수 3: - * - * 0
//   // 경우의 수 4: - * - * - 

//   let negatArr = [];
//   let positArr = [];
//   let zero = false;
  
//   for(elem of arr) {
//     if(elem === 0) {
//       zero = true;
//     } else if (elem < 0) {
//       negatArr.push(elem);
//     } else if (elem > 0) {
//       positArr.push(elem);
//     }
//   } 
  
//   negatArr.sort(function(a, b) {
//     return a - b;
//   });
//   positArr.sort(function(a, b) {
//     return b - a;
//   });

//   let output = [];

//   if ( positArr.length > 2 && negatArr.length < 2 ) {
//     output.push(positArr[0] * positArr[1] * positArr[2]);
//   } else if (zero === true) {
//     output.push(0);
//   } else if (negatArr.length > 1 && positArr.length > 0) {
//     output.push(negatArr[0] * negatArr[1] * positArr[0])
//   } else if (negatArr.length > 2 && positArr.length === 0) {
//     output.push(negatArr[negatArr.length - 1] 
//     * negatArr[negatArr.length - 2]
//     * negatArr[negatArr.length - 3])
//   }

//   output.sort(function(a, b) {
//     return b - a;
//   })

//   return output[0];

// };

// !!reference below

const largestProductOfThree = function (arr) {
  const sorted = arr.slice().sort((a, b) => a - b);
  const len = arr.length;
  const candi1 = sorted[len - 1] * sorted[len - 2] * sorted[len - 3];
  const candi2 = sorted[len - 1] * sorted[0] * sorted[1];
  return Math.max(candi1, candi2);
};