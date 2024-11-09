function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}
function partition(arr, low, high) {
  let pivot = low;
  for (let i = low + 1; i <= high; i++) {
    if (arr[i] <arr[low]) {
      swap(arr, i, ++pivot);
    }
  }
  swap(arr, low, pivot);
  console.log('swapped array:',arr)
  console.log('pivot is:',pivot)
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
console.log(quickSort([3,9,1,13,15,151,3,13,25,15,0]))