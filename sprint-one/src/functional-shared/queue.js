var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  let instance = {
    storage: {},
  };

  _.extend(instance, queueMethods);
  return instance;

};

var queueMethods = {};

queueMethods.enqueue = function (value) { //add to end
  let storage = this.storage;
  let keysArray = Object.keys(storage);
  let length = Object.keys(storage).length;
  //if storage is empty
  if (length === 0) {
    //add value at key = 0
    storage[0] = value;
  } else {
    let lastKey = Math.max(...keysArray);
    //if storage has not had anything removed (ie length > lastKey)
    if (length > lastKey) {
      //new key = length
      storage[length] = value;
    //if storage has had keys removed (i.e. length <= lastKey)
    } else if (length <= lastKey) {
      //new key = lastKey + 1
      storage[lastKey + 1] = value;
    }
  }

};

queueMethods.dequeue = function () { //remove from beginning
  let storage = this.storage;
  let keysArray = Object.keys(storage);
  let length = Object.keys(storage).length;
  let firstKey, shifted;

  //if there are things in storage (length > 0)
  if (length > 0) {
    //find firstKey
    firstKey = Math.min(...keysArray);
    //remove first property
    shifted = storage[firstKey];
    delete storage[firstKey];
  }

  return shifted;


};

queueMethods.size = function () {
  let storage = this.storage;
  let length = Object.keys(storage).length;
  return length;
};