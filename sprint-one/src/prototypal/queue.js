var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  let instance = Object.create(queueMethods);
  instance.storage = {};
  return instance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) { //add new property at end of object
  let storage = this.storage;
  let length = Object.keys(storage).length;
  let keyArray = Object.keys(storage);
  //if storage is empty (length is 0)
  if (!length) {
    storage[0] = value;
  } else {
    //find the lastKey
    let lastKey = Math.min(...keyArray);
    //if storage has never had anything removed (length > lastKey)
    if (length > lastKey) {
      //store value at key = length
      storage[length] = value;
    //if storage HAS had things removed (length <= lastKey)
    } else if (length <= lastKey) {
      //store value at key = length + 1
      storage[length + 1] = value;
    }
  }


};

queueMethods.dequeue = function() { //remove first property
  let storage = this.storage;
  let length = Object.keys(storage).length;
  let keyArray = Object.keys(storage);
  //if storage has stuff in it / is not empty
  let shifted;
  if (length) {
    //remove the first property, ie the property at the smallest key
    firstKey = Math.min(...keyArray);
    shifted = storage[firstKey];
    delete storage[firstKey];
  }
  return shifted;
};

queueMethods.size = function() {
  let storage = this.storage;
  let length = Object.keys(storage).length;
  let keyArray = Object.keys(storage);
  return length;

};


