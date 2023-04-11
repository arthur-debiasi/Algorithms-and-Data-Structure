const exArr = [2, 3, 4, 5, 6, 7, 8];

const addition = (numbers) => numbers.reduce((acc, curr) => acc + curr, 0);
const subtraction = (numbers) => numbers.reduce((acc, curr) => acc - curr, 0);
const multiplication = (numbers) => numbers.reduce((acc, curr) => acc * curr, 1);
const divison = (a, b) => {
  if(b === 0) {
    throw new Error('The dividend "b" must not be zero!')
  }
  return a / b;
} 

const challengeTwo = new Map();
challengeTwo.set('addition', addition);
challengeTwo.set('subtraction', subtraction);
challengeTwo.set('multiplication', multiplication);
challengeTwo.set('divison', divison);

console.log('This is the example array ==>', exArr);
console.log('This is the addition ==>', challengeTwo.get('addition')(exArr));
console.log('This is the subtraction ==>', challengeTwo.get('subtraction')(exArr));
console.log('This is the multiplication ==>', challengeTwo.get('multiplication')(exArr));
console.log('This is the divison ==>', challengeTwo.get('divison')(4,2));
