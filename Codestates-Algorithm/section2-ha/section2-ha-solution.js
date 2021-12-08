function test1() {
  // TODO: 여기에 코드를 작성하세요.
  let count = 0;

  function fibonacci (num) {
    if (num < 2) return num;
    return fibonacci(num - 1) + fibonacci(num - 2);
  };

  return function() {
    count += 1;
    return fibonacci(count - 1);
  };
}

function test2(arr, id) {
  // TODO: 여기에 코드를 작성합니다.
  let newArr = [];
  for (let elem of arr) {
    if(elem.id === id) {
      return elem;
    } else if (elem.id !== id) {
      if(Object.keys(elem).includes("children") && Array.isArray(elem["children"])){
        newArr = [...newArr, ...elem["children"]];
      };
    };
  };
  if (newArr.length !== 0) {
    return test2(newArr, id);
  };
  return null;
};

function test3(insertEdges, removeEdges) {
  /// TODO: 여기에 코드를 작성하세요.
  let max = 0;

  for (let i = 0; i < insertEdges.length; i++) {
    insertEdges.reduce(function(a, c) {
      let slicedC = c.slice(0, 2);
      let check = Math.max(...slicedC);
      if(check > a) {
        max = check;
        return check; 
      };
      return a;
    }, 0);
  };

  let result = new Array(max + 1).fill(0).map((row) =>
    new Array(max + 1).fill(0)
  );

  insertEdges.forEach(function(edge) {
    let [row, col] = edge;
    result[row][col] = 1;
    result[col][row] = 1;
  });

  removeEdges.forEach(function(edge) {
    let [row, col] = edge;
    result[row][col] = 0;
    result[col][row] = 0;
  });

  return result;
}