function binarySearch(searchList, value) {
    let arrayPath = [];
    let isThere=false
    let pivot= Math.floor((searchList.length-1)/2)
    while(!isThere)
    {
      arrayPath.push(searchList[pivot])
      if(searchList[pivot]==value)
      {
        isThere=true
      }
      
    }
    return arrayPath;
  }