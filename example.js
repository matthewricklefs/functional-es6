// this will throw an error
const x = 5;
x = 6;

const numbers = [1, 2, 3, 4, 5];

// bad
numbers = ['hello'];

// good
numbers[0] = 100;

numbers.reverse();

const person = {
  name: 'John Doe',
  age: 34,
};

// bad
person = { name: 'Bob' };

// good
person.name = 'Bob';

// prevent mutation with ESLint rules
