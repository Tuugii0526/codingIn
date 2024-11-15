function PriorityQueue () {
  this.collection = [];
  this.printCollection = function() {
    console.log(this.collection);
  };
  // Only change code below this line
this.enqueue=function(element){
  const afterElements=[]
  const beforeElements= this.collection.filter(el=>{
    if(el[1]>=element[1])
    {
      return true
    }
    else
    {
    afterElements.push(el)
    }
    return false
  })
  this.collection=[...beforeElements,element,...afterElements]

}
this.dequeue=function(){
  return  this.collection.shift()[0]
}
this.size=function(){
  return this.collection.length
}
this.front=function(){
  return this.collection[0][0]
}
this.isEmpty=function(){
  return this.collection.length==0
}
  // Only change code above this line
}
const queue = new PriorityQueue()
queue.printCollection()
queue.enqueue(['sock',1])
queue.printCollection()
queue.enqueue(['sock',4])
queue.printCollection()
queue.enqueue(['sock',4])
queue.printCollection()
queue.enqueue(['sock',3])
queue.printCollection()
queue.enqueue(['sock',5])
queue.printCollection()