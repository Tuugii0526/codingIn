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
    if (!this.queue[this.write + 1]) {
    } else {
      return null;
    }
    // Only change code above this line
  }

  dequeue() {
    // Only change code below this line
    if (this.queue[this.read]) {
      const readItem = this.queue[this.read];
      this.queue[this.read] = null;
      this.read = (this.read + 1) % (this.max + 1);
      return readItem;
    } else {
      return null;
    }
    // Only change code above this line
  }
}
const q = new CircularQueue(3);
console.log(q.enqueue(3));
console.log(q.print());
// console.log(q.dequeue());
// console.log(q.dequeue());
console.log(q.enqueue(10));
console.log(q.print());
console.log(q.enqueue(21));
console.log(q.print());

console.log(q.enqueue(21));
console.log(q.print());

console.log("queue read:", q.read);
console.log("queue write", q.write);
