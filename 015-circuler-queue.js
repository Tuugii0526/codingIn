class CircularQueue {
  constructor(size) {
    this.queue = [];
    this.read = 0;
    this.write = 0;
    this.max = size - 1;

    while (size > 0) {
      this.queue.push(null);
      size--;
    }
  }

  print() {
    return this.queue;
  }

  enqueue(item) {
    // Only change code below this line
    if (this.write + 1 < this.read) {
      if (this.write + 1 > this.max) {
        this.write = 0;
      } else {
        this.write++;
      }
      this.queue[this.write] = item;
      return item;
    }
    return null;
    // Only change code above this line
  }

  dequeue() {
    // Only change code below this line
    if (this.read + 1 < this.write) {
      if (this.read + 1 > this.max) {
        this.read = 0;
      } else {
        this.read++;
      }
      const readItem = this.queue[this.read];
      this.queue[this.read] = null;
      return readItem;
    }
    return null;
    // Only change code above this line
  }
}
const cirQueue = new CircularQueue(3);
console.log(cirQueue.enqueue(3));
