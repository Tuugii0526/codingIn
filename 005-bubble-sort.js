function bubbleSort(array) {
    // Only change code below this line
    for(let i=0;i<array.length-1;i++)
    {
      for(let j=0;j<array.length-1;j++)
      {
        if(array[j]>array[j+1])
        {
          const currElement=array[j]
          array[j]=array[j+1]
          array[j+1]=currElement
        }
      }
    }
    return array
    // Only change code above this line
  }
  
  