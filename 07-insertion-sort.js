function insertionSort(array) {
   // Only change code below this line
      for(let i=0;i<array.length;i++)
      {
        const currElement=array[i]
        let counter=i
        while(0<counter && array[counter-1]>currElement)
        {
           array[counter]=array[counter-1]
           counter--
        }
        array[counter]=currElement
      }
 return array
   // Only change code above this line
 }
 console.time('time:')
 insertionSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92])
 console.timeEnd('time:')