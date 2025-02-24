//LAST IN FIRST OUT
function Stack() {
    var collection = [];
    this.print = function() {
      console.log(collection);
    };
    // Only change code below this line
    this.push=function (element){
      collection.push(element)
    }
    this.pop=function (){
      return collection.pop()
    }
  this.peek=function(){
    return collection[collection.length-1]
  }
  this.clear=function(){
    collection=[]
  }
  this.isEmpty=function(){
    return collection.length==0
  }
    // Only change code above this line
  }