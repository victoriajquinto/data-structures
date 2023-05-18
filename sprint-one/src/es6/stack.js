class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    // this.length = Object.keys(this.storage).length;
    // this.keysArray = Object.keys(this.storage);
  }

  push(value) {
    console.log('start push. value: ', value);
    let storage = this.storage;
    let length = Object.keys(this.storage).length;
    let keysArray = Object.keys(this.storage);

    storage[length] = value;

  }

  pop() {
    let storage = this.storage;
    let length = Object.keys(this.storage).length;
    let keysArray = Object.keys(this.storage);

    let popped;
    //if storage has stuff in it
    if (length) {
      //find last key
      let lastKey = Math.max(...keysArray);
      popped = storage[lastKey];
      delete storage[lastKey];
    }
    //return popped
    return popped;

  }
  size() {
    let storage = this.storage;
    let length = Object.keys(this.storage).length;
    let keysArray = Object.keys(this.storage);
    return length;
  }

}
