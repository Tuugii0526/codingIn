class Set {
  constructor() {
    // This will hold the set
    this.dictionary = {};
    this.length = 0;
  }
  // This method will check for the presence of an element and return true or false
  has(element) {
    return this.dictionary[element] !== undefined;
  }
  // This method will return all the values in the set
  values() {
    return Object.keys(this.dictionary);
  }
  // This method will add an element to the set
  add(element) {
    if (!this.has(element)) {
      this.dictionary[element] = true;
      this.length++;
      return true;
    }

    return false;
  }
  // This method will remove an element from a set
  remove(element) {
    if (this.has(element)) {
      delete this.dictionary[element];
      this.length--;
      return true;
    }

    return false;
  }
  // This method will return the size of the set
  size() {
    return this.length;
  }
  // This is our union method
  union(set) {
    const newSet = new Set();
    this.values().forEach((value) => {
      newSet.add(value);
    });
    set.values().forEach((value) => {
      newSet.add(value);
    });

    return newSet;
  }
  // Only change code below this line
  intersection(set) {
    const intersection = new Set();
    intersection.union(this.dictionary);
    const arr = [];
    const addToInt = (value) => {
      if (!intersection.add(value)) {
        arr.push(value);
      }
    };
    set.values().forEach(addToInt);
    return arr;
  }
  // Only change code above this line
}
const set1 = new Set();
set1.add(1);
set1.add(3);
set1.add(8);
const set2 = new Set();
set2.add(1);
set2.add(3);
console.log(set1.intersection(set2));
