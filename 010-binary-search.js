function pivotFinderAlpha(low,high){
  return Math.floor((low+high)/2)
 }
 function pivotFinderBeta(low,high){
 return low+Math.floor((high-low)/2)
 }
 // console.time('alpha:')
// pivotFinderAlpha(10000000000000,10000008900000)
// console.timeEnd('alpha:')
// console.time('beta:')
// pivotFinderBeta(10000000000000,10000008900000)
// console.timeEnd('beta:')
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
      if (pivot - 1 >= low) {
        high = pivot - 1;
      } else break;
    } else {
      if (pivot + 1 <= high) {
        low = pivot + 1;
      } else break;
    }
    pivot = Math.floor((low + high) / 2);
  }

  if (isThere) {
    return arrayPath;
  }
  return "Value Not Found";
}
console.time('alpha:')
binarySearch([1, 2, 4, 5,8,9,45,90], 3412343)

console.timeEnd('alpha:')
function binarySearchBeta(searchList, value) {
  const arrayPath = [];
  let low = 0;
  let high = searchList.length - 1;
  let pivot;
  while (high >= low) {
    pivot = low + Math.floor((high - low) / 2);
    arrayPath.push(searchList[pivot]);
    if (searchList[pivot] == value) {
      return arrayPath;
    }
    if (searchList[pivot] > value) {
      high = pivot - 1;
    } else {
      low = pivot + 1;
    }
  }
  return 'Value Not Found'
}
console.time('beta:')
binarySearchBeta([1, 2, 4, 5,8,9,45,90], 3412343)
console.timeEnd('beta:')


