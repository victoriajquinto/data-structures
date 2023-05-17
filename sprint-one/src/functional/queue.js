var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) { //add a string to the BACK of the queue - end of Object.keys()
    //see stack.js for pseudocode
    let keysArray = Object.keys(storage);
    let length = Object.keys(storage).length;
    console.log('begin enqueue');
    console.log('value to enqueue ', value);
    console.log('object keys array', Object.keys(storage));
    //if storage is empty,
    if (length === 0) {
      //key = 0
      storage[0] = value;
    } else if (Math.max(...keysArray) < length) {// things have not been removed
      //key = one more than the last one
      storage[Object.keys(storage).length] = value;
    } else {
      storage[Object.keys(storage).length + 1] = value;
    }

    console.log('storage after enqueue', storage);
    console.log('end EQ');

  };

  someInstance.dequeue = function() { //remove and return the string at the FRONT of the queue - front of Object.keys()
    console.log('begin dequeue');

    //PSEUDOCODE:
    var shifted;

    // if there are items in storage
    if (Object.keys(storage).length) {
      //find the last property in the storage object - reference numeric keys
      var firstKey = Math.min(...Object.keys(storage));
      console.log('firstKey: ', firstKey, ', value at firstKey: ', storage[firstKey]);
      //delete the last property
      shifted = storage[firstKey];
      delete storage[firstKey];
    } // else if there are no items in storage - do nothing
    console.log(storage);
    return shifted;

  };

  someInstance.size = function() { //return the number of items in queue
    //return the number of properties in storage
    return Object.keys(storage).length;
  };

  return someInstance;
};
