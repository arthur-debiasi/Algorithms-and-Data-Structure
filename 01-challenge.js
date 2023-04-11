// Create an algorithm that runs through a one-dimensional array containing
// letters and numbers: [ '“'a”, 10, '“'b”, “hola”, 122, 15]
// Get an array containing just the letters/
// Get an array containing just the numbers
// Get the highest number from the array above

const exArr = ['a', 10, 'b', 'hola', 122, 15];

class challengeOne {
  constructor(array) {
    this.array = array;
  }

  filterBy(type) {
    return this.array.filter((element) => typeof element === type);
  }

  letters() {
    return this.filterBy('string');
  }

  numbers() {
    return this.filterBy('number');
  }

  highest() {
    return Math.max(...this.numbers());
  }
}

console.log('This is the example array ==>', exArr);
console.log('Get an array containing just the letters ==>', new challengeOne(exArr).letters());
console.log('Get an array containing just the numbers ==>', new challengeOne(exArr).numbers());
console.log('Get the highest number from an array containing just the numbers ==>', new challengeOne(exArr).highest());
