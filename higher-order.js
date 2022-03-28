const divide = (x, y) => {
  // argument checking logic..
  if (y === 0) {
    console.log('error: dividing by zero');
    return null;
  }
  return x / y;
};

// single responsibility principle refactoring
const betterDivide = (x, y) => x / y;

const secondArgumentNotZero =
  (func) =>
  // spread operator
  (...args) => {
    // argument checking logic..
    if (args[1] === 0) {
      console.log('error: dividing by zero');
      return null;
    }

    return func(...args);
  };

const divideSafe = secondArgumentNotZero(betterDivide);

console.log(divideSafe(7, 0));
console.log(divideSafe(5, 3));
