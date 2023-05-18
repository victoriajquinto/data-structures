var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  storage = this.storage;

};

Queue.prototype.enqueue = function(value) {
  let keysArray = Object.keys(this.storage);
  let length = keysArray.length;
  //if there is stuff in storage
  if (length) {
    //find the last key
    let lastKey = Math.min(...keysArray);
    //if length is bigger than keys
    if (length > lastKey) {
      //add each value to length
      storage[length] = value;
    //else if length is equal to or less than the last key
    } else if (length <= lastKey) {
      //=add value at lastKey + 1
      storage[lastKey + 1] = value;
    }
  //else
  } else if (!length) {
    //add value at storage[0]
    storage[0] = value;
  }

};
Queue.prototype.dequeue = function() {
  let keysArray = Object.keys(this.storage);
  let length = keysArray.length;
  //create variable to hold first value to return later
  let shifted;

  //if there is stuff in this.storage
  if (length) {
    //find firstKey
    let firstKey = Math.min(...keysArray);
    shifted = storage[firstKey];
    //delete property at firstKey
    delete storage[firstKey];
  }
  //return value at first key
  return shifted;


};
Queue.prototype.size = function() {
  let keysArray = Object.keys(storage);
  // console.log(keysArray);
  let length = keysArray.length;
  return length;

};


