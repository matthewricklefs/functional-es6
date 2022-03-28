// define a function that returns a function that prints something to the console.

// remember that this is a shorthand way of writing a much longer version.
const createPrinter = () => () => console.log('Hello');

// long version
const elongatedCreatePrinter = function () {
  return function () {
    console.log('Hello');
  };
};

// refactor and increase code reuse...
// const double = (x) => x * 2;
// const triple = (x) => x * 3;
// const quadruple = (x) => x * 4;

// function to create variations.. IE - First Class Function
const createMultiplier = (y) => (x) => x * y;

// reusable best practice...
const double = createMultiplier(2);
const triple = createMultiplier(3);
const quadruple = createMultiplier(4);
