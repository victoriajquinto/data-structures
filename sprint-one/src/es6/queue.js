class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    // this.length = Object.keys(this.storage).length;
    // this.keysArray = Object.keys(this.storage);

  }
  enqueue(value) {
    let storage = this.storage;
    let length = Object.keys(this.storage).length;
    let keysArray = Object.keys(this.storage);

    //if there is stuff in storage
    if (length) {
      //find lastKey
      let lastKey = Math.max(...keysArray);
      //if the length is greater than the lastkey
      if (length > lastKey) {
        storage[length] = value;
      //else
      } else {
        storage[lastKey + 1] = value;
      }

    //else
    } else {
      //assign value to storage[0];
      storage[0] = value;
    }

  }
  dequeue() {
    let storage = this.storage;
    let length = Object.keys(this.storage).length;
    let keysArray = Object.keys(this.storage);
    let shifted;
    //if there is stuff in storage
    if (length) {
      //find lastKey
      let firstKey = Math.min(...keysArray);
      //assign value at last key to shifted
      shifted = this.storage[firstKey];
      delete storage[firstKey];
    }
    return shifted;

  }
  size() {
    let storage = this.storage;
    let length = Object.keys(this.storage).length;
    let keysArray = Object.keys(this.storage);
    console.log(length);
    return length;

  }


}
