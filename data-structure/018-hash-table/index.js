var called = 0;
var hash = (string) => {
  called++;
  var hashed = 0;
  for (var i = 0; i < string.length; i++) {
    hashed += string.charCodeAt(i);
  }
  return hashed;
};
var HashTable = function () {
  this.collection = {};
  // Only change code below this line
  this.add = (key, value) => {
    const hashed = hash(key);
    this.collection[hashed] = this.collection[hashed] || {};
    this.collection[hashed][key] = value;
  };
  this.remove = (key) => {
    const hashed = hash(key);
    delete this.collection[hashed][key];
    if (Object.keys(this.collection[hashed]) == 0) {
      delete this.collection[hashed];
    }
  };
  this.lookup = (key) => {
    const hashed = hash(key);
    if (!this.collection[hashed][key]) {
      return null;
    }
    return this.collection[hashed][key];
    // Only change code above this line
  };
  this.print = () => {
    console.log(this.collection);
  };
};
