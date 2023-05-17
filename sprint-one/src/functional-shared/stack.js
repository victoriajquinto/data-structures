var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  let instance = {
    storage: {},
  };
  _.extend(instance, stackMethods);
  // console.log('instance: ', instance);
  return instance;
};

var stackMethods = {};


///where to put storage ....

stackMethods.push = function (value) {
  console.log('value to push', value);
  let storage = this.storage;
  //add properties to end of object
  let length = Object.keys(storage).length;
  console.log(length);
  storage[length] = value;
  console.log('storage', storage);
  console.log('end push----');

};

stackMethods.pop = function () {
  var lastValue;

  let storage = this.storage;
  let length = Object.keys(storage).length;
  //remove properties at end of object
  let lastKey = length - 1;
  lastValue = storage[lastKey];
  delete storage[lastKey];

  return lastValue;

};

stackMethods.size = function () {
  let storage = this.storage;
  let length = Object.keys(storage).length;
  return length;

};


