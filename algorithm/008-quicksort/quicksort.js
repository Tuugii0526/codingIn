function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}
function partition(arr, low=0, high=arr.length-1) {
  let pivot = low;
  for (let i = low + 1; i <= high; i++) {
    if (arr[i] <arr[low]) {
      swap(arr, i, ++pivot);
    }
  }
  swap(arr, low, pivot);
  return pivot;
}
function quickSort(array, low = 0, high = array.length - 1) {
  // Only change code below this line
  if (low < high) {
    let pivot = partition(array, low, high);
    quickSort(array, low, pivot - 1);
    quickSort(array, pivot + 1, high);
    return array;
  }
  // Only change code above this line
}
console.time('time:')
quickSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92,1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]) //0.615ms
console.timeEnd('time:')