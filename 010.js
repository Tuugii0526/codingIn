function binarySearch(searchList, value) {
  let arrayPath = [];
  let isThere=false
  let low=0
  let high=searchList.length-1
  let pivot= Math.floor((low+high)/2)
  while(true)
  {
    arrayPath.push(searchList[pivot])
     if(low==high)
    {
      break
    }
    if(searchList[pivot]==value)
    {
      isThere=true
      break
    }
    else if(value<searchList[pivot])
    {
      high=pivot-1
    }
    else if(value>searchList)
    {
      low=pivot+1
    }
    pivot= Math.floor((low+high)/2)
  }
  console.log('array path:',arrayPath)
  if(isThere)
  {
    return arrayPath;
  }
  return 'Value Not Found'
}
console.log(binarySearch([1,2,4,5],4))