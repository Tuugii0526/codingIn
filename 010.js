function binarySearch(searchList, value) {
  let arrayPath = [];
  let isThere = false;
  let low = 0;
  let high = searchList.length - 1;
  let pivot = Math.floor((low + high) / 2);
  while (true) {
    arrayPath.push(searchList[pivot]);
    if (searchList[pivot] == value) {
      isThere = true;
      break;
    } else if (value < searchList[pivot]) {
      if(pivot-1>=low)
      {
        high = pivot - 1;
      }
      else break;
    } else  {
      if(pivot+1<=high)
      {
        low=pivot+1
      }
      else break;
    }
    pivot = Math.floor((low + high) / 2);
  }

  if (isThere) {
    return arrayPath;
  }
  return "Value Not Found";
}
console.time('time:')
binarySearch([1, 2, 4, 5,8,9,45,90], 3412343)

console.timeEnd('time:')
