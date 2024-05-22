// queue => FIFO

const queue = [];

// queue.push() -> O(1)
// queue.shift() -> O(n)

// OR

// queue.unshift() -> O(n)
// queue.pop() -> O(1)

// class Queue extends Map {
//   constructor() {
//     super();
//     this.insertionIdx = 0;
//     this.removalIdx = 0;
//   }

//   enqueue(el) {
//     this.set(this.insertionIdx, el);
//     this.insertionIdx++;
//   }

//   dequeue() {
//     const el = this.get(this.removalIdx);
//     if (typeof el !== "undefined") {
//       this.delete(this.removalIdx);
//       this.removalIdx++;
//     }
//     return el;
//   }
// }
