function myFunction(arg1, arg2) {
  // function body
}

const myOtherFunction = function (arg1, arg2) {
  // function body
};

// Arrow Functions
const add = (x, y) => x + y;

// ES6 shorthand
const double = (number) => number * 2;

// ES5
const otherDouble = function (number) {
  return number * 2;
};

const sayHello = () => console.log('hello');

// implicit return
const getPersonData = () => ({
  name: 'John Doe',
  age: 34,
  job: 'programmer',
});

// 0 args
const arrow1 = () => {};

// 1 arg
const arrow2 = (arg1) => {};

// 2 arg
const arrow3 = (arg1, arg2) => ({ name: 'hi', why: 'unsure' });
