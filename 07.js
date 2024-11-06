function insertionSort(array) {
    // Only change code below this line
       for(let i=0;i<array.length;i++)
       {
         const currElement=array[i]
         let counter=i
         while(0<=counter && array[counter-1]<currElement)
         {
            array[counter]=array[counter-1]
            counter--
         }
       }
  
    // Only change code above this line
  }