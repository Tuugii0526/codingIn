function selectionSort(array) {
    // Only change code below this line
    for(let i=0;i<array.length-1;i++)
    {
      let minIndex=i
      for(let j=i+1;j<array.length;j++)
      {
        if(array[minIndex]>array[j])
        {
          minIndex=j
        }
      }
      const currElement=array[i]
      array[i]=array[minIndex]
      array[minIndex]=currElement
    }
    return array
    // Only change code above this line
  }