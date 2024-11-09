function swap(arr, x, y) {
    [arr[x], arr[y]] = [arr[y], arr[x]];
    console.log('changed array:',arr)
  }
function pivot(arr, left = 0, right = arr.length - 1) {
    console.log('original array is:',arr);
    let shift = left;
    for (let i = left + 1; i <= right; i++) {
      //Move all the small elements on the left side
      if (arr[i] < arr[left]) {
        swap(arr, i, ++shift)
      };
    }
  
    //Finally swapping the last element with the left
    swap(arr, left, shift);
    console.log('THe last array is:',arr)
    console.log('shift is:',shift)
    return shift;

  }
  function quickSort(array, left = 0, right = array.length - 1) {
    if (left < right) {
      let pivotIndex = pivot(array, left, right);
  
      //Recusrively calling the function to the left of the pivot and to the right of the pivot
      quickSort(array, left, pivotIndex - 1);
      quickSort(array, pivotIndex + 1, right);
    }
    return array;
  }
  

  function quickSort(array) {
    if (array.length === 0) {
      return [];
    } else {
      const pivotValue = array[0];
      // Sort elements into three piles
      let lesser = [];
      let equal = [];
      let greater = [];
      for (let e of array) {
        if (e < pivotValue) {
          lesser.push(e);
        } else if (e > pivotValue) {
          greater.push(e);
        } else {
          equal.push(e);
        }
      }
      return [...quickSort(lesser), ...equal, ...quickSort(greater)];
    }
  }
