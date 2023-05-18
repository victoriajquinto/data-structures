var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  storage = this.storage;
  // console.log(storage);
  // this.length = Object.keys(storage).length;
  // this.keys = Object.keys(storage);

};
Stack.prototype.push = function(value) {
  console.log('start push, value =', value);

  let length = Object.keys(storage).length;
  let keysArray = Object.keys(storage);
  storage[length] = value;
  console.log('storage', storage);

  console.log('end push-----');

};
Stack.prototype.pop = function() {
  let length = Object.keys(storage).length;
  let keysArray = Object.keys(storage);
  let popped;

  let lastKey = Math.max(...keysArray);
  popped = storage[lastKey];
  delete storage[lastKey];
  return popped;

};
Stack.prototype.size = function() {
  // console.log(keys);
  let length = Object.keys(storage).length;
  let keysArray = Object.keys(storage);
  return length;

};

let instance = new Stack;
console.log('instance: ', instance);
