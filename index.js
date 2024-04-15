// Helper function to determine if an input is an array
function isArray(collection) {
    return Array.isArray(collection);
  }
  
  // Helper function to determine if an input is an object
  function isObject(collection) {
    return typeof collection === 'object' && collection !== null && !Array.isArray(collection);
  }
  
  // Helper function to implement myEach, myMap, myReduce, myFind, myFilter, mySize for both arrays and objects
  function processCollection(collection, callback, operation, acc) {
    if (isArray(collection)) {
      if (operation === 'map') {
        return collection.map(callback);
      } else if (operation === 'reduce') {
        return acc !== undefined ? collection.reduce(callback, acc) : collection.reduce(callback);
      } else if (operation === 'size') {
        return collection.length;
      } else { // operation is 'each', 'find', or 'filter'
        collection.forEach(callback);
        return collection;
      }
    } else if (isObject(collection)) {
      const values = Object.values(collection);
      if (operation === 'map') {
        return values.map(callback);
      } else if (operation === 'reduce') {
        return acc !== undefined ? values.reduce(callback, acc) : values.reduce(callback);
      } else if (operation === 'size') {
        return values.length;
      } else if (operation === 'find') {
        for (const key in collection) {
          if (callback(collection[key])) {
            return collection[key];
          }
        }
      } else { // operation is 'each' or 'filter'
        const result = {};
        for (const key in collection) {
          if (callback(collection[key])) {
            result[key] = collection[key];
          }
        }
        return result;
      }
    }
  }
  
  // Implementing the collection functions
  function myEach(collection, callback) {
    return processCollection(collection, callback, 'each');
  }
  
  function myMap(collection, callback) {
    return processCollection(collection, callback, 'map');
  }
  
  function myReduce(collection, callback, acc) {
    return processCollection(collection, callback, 'reduce', acc);
  }
  
  function myFind(collection, predicate) {
    return processCollection(collection, predicate, 'find');
  }
  
  function myFilter(collection, predicate) {
    return processCollection(collection, predicate, 'filter');
  }
  
  function mySize(collection) {
    return processCollection(collection, null, 'size');
  }
  
  // Array Functions
  function myFirst(array, n) {
    if (n === undefined) return array[0];
    return array.slice(0, n);
  }
  
  function myLast(array, n) {
    if (n === undefined) return array[array.length - 1];
    return array.slice(Math.max(array.length - n, 0));
  }
  
  module.exports = {
    myEach,
    myMap,
    myReduce,
    myFind,
    myFilter,
    mySize,
    myFirst,
    myLast
  };