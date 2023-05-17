var Stack = function() {
  //no arrays! instead, use object of numeric keys
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) { //add string to top of stack
    //Specification:
      //input: some instance of a stack
      //output: a new property in storage
      //constraints:
      //edge cases:
    //Justification: add value to the 'end' of storage
    //Explanation: add property to end of storage. key = consecutive number after the last key, value = value
    //Visualization:
    //Approximation:
    //Verification:
    //Implementation:

    //PSEUDOCODE:
    //see storage
    // console.log(JSON.stringify(storage));
    //identify if there are any keys in storage
    //find the last key in array of keys
    //add a new key (consecutive to the last key)
    //add value to the new key
    console.log('begin push');
    console.log('value to push ', value);
    storage[Object.keys(storage).length] = value;
    console.log('storage after push', storage);
    console.log('storage length after push ', Object.keys(storage).length);




  };

  someInstance.pop = function() { //remove and return string on top of stack
    //Specification:
      //input: some instance of a stack
      //output: number of properties in stack
      //constraints:
        //if the stack is empty, don't remove anything
      //edge cases:
    //Justification: remove string from the 'end' of the object
    //Explanation: delete last property in storage
    //Visualization:
    //Approximation:
    //Verification:
    //Implementation:

    //PSEUDOCODE:
    var popped;

    // if there are items in storage
    if (Object.keys(storage).length) {
      //find the last property in the storage object - reference numeric keys
      var lastKey = Object.keys(storage).length - 1;
      //delete the last property
      popped = storage[lastKey];
      delete storage[lastKey];
    } // else if there are no items in storage - do nothing
    console.log('popped item', popped);
    return popped;

  };

  someInstance.size = function() { //return number of items on the stack
    //Specification:
      //input: some instance of a stack
      //output: number of properties in stack
      //constraints:
        //if the stack is new, return 0.
        //if more items are removed than added, return 0
      //edge cases:
    //Justification: calculate current size of stack
    //Explanation: count number of items in stack currently
    //Visualization:
    //Approximation:
    //Verification:
    //Implementation:

    //PSEUDOCODE:
    //if storage does not have any keys
    // if (Object.keys(storage).length === 0) {
    //   console.log(Object.keys(storage).length);
    //   return 0;
    // } else {
    //   return Object.keys(storage).length;
    // }

    return Object.keys(storage).length;


  };

  return someInstance;
};

//Specification:
	//input:
	//output:
	//constraints:
	//edge cases:
//Justification:
//Explanation:
//Visualization:
//Approximation:
//Verification:
//Implementation: