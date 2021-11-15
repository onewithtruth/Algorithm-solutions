const isSubsetOf = function (base, sample) {
    // TODO: 여기에 코드를 작성합니다.
    let baseSet = base.sort((a, b) => a - b);
    sample.sort((a, b) => a - b);
    function checkItem (item, arr, startIndex) {
      for (let i = startIndex; i < arr.length; i++) {
        if(arr[i] === item) return i;
      }
      return -1;
    }
    let check = 0;
    for (let i = 0; i < sample.length; i++) {
      check = checkItem(sample[i], baseSet, check);
      if(check === -1) return false;
    }
    return true;
  };
