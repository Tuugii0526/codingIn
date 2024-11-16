function PriorityQueue () {
  this.collection = [];
  this.printCollection = function() {
    console.log(this.collection);
  };
  // Only change code below this line
this.enqueue=function(element){
  const index=this.collection.findIndex(el=>el[1]>element[1])
 if(index!==-1)
 {
  this.collection.splice(index,0,element)
 }
 else 
 {
  this.collection.push(element)
 }
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
}
