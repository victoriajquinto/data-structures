var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  let instance = Object.create(stackMethods);
  instance.storage = {};

  return instance;
};

var stackMethods = {};
//creating a new object with delegation features: newObject = Object.create(fallbackSource)
//[object].prototype = {}

stackMethods.push = function (value) {
  let storage = this.storage;
  let length = Object.keys(storage).length;
  let keysArray = Object.keys(storage);

  storage[length] = value;
};

stackMethods.pop = function () {
  let storage = this.storage;
  let length = Object.keys(storage).length;
  let keysArray = Object.keys(storage);
  //store first value in a variable
  let popped;
  //delete value at last element. last element is at length - 1
  let lastKey = length - 1;
  popped = storage[lastKey];

  delete storage[lastKey];

  //return popped
  return popped;


};

stackMethods.size = function () {
  let storage = this.storage;
  let length = Object.keys(storage).length;
  let keysArray = Object.keys(storage);

  return length;
};



