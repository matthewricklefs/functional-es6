const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers.sort(); // mutation
numbers.reverse(); // mutation
numbers.push(); // mutation
numbers.pop(); // mutation

// Functional programming prohibits mutations.. we cannot use them directly
// Workaround for transforming mutating funcs to non-mutatings funcs

// Slice
// Normally used to get a section of elements from within an array

const sliced = numbers.slice(3, 8);
console.log(sliced);

// call slice with no arguments and then call the mutating func after that
console.log(numbers.slice().reverse());

// Sort (mutating func)
// change the order of elements in an array
// takes a func as an argument.
// however the func passed (comparator func takes in two arguments)
// these two args are abstract and stand for any two elements in our array that could be compared
// the return value for any two elements determines the order in which they will appear
// in relation to eachother in the final array

const mixedUpNumbers = [0, 22, 2, 10, 5, 4, 6, 7, 8, 9, 3];

const ascending = (a, b) => {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
};

const sortedNumbers = mixedUpNumbers.slice().sort(ascending);
console.log(sortedNumbers);

const descending = (a, b) => {
  if (a < b) return 1;
  if (a > b) return -1;
  return 0;
};

const sortDesc = mixedUpNumbers.slice().sort(descending);
console.log(sortDesc);

// Reduce
// takes a func as an argument.. the form of the func in its simplest form takes two args
// first arg represents current value (accumulator)
// second arg represents the current element we are looking at
// purpose is to tell reduce how to combine the current val of accumulator
// and the current element
// returns acc + element
// remember the second argument of the reduce would be the element you are starting at
// const sum = numbers.reduce((acc, x) => {
//   console.log(`acc is ${acc}`);
//   console.log(`x is ${x}`);

//   return acc + x;
// }, 0);

// console.log(sum);

// Combing Funcs
const employees = [
  {
    name: 'John',
    age: 54,
    jobTitle: 'developer',
    salary: 70000,
  },
  {
    name: 'Saravanan',
    age: 32,
    jobTitle: 'recruiter',
    salary: 80000,
  },
  {
    name: 'Fernando',
    age: 23,
    jobTitle: 'architect',
    salary: 140000,
  },
  {
    name: 'Lucy',
    age: 25,
    jobTitle: 'designer',
    salary: 900000,
  },
];

const developers = employees.filter(
  (employee) => employee.jobTitle === 'developer'
);
console.log(developers);

const developerSalaries = developers.map((developer) => developer.salary);
const totalDevSalary = developerSalaries.reduce((acc, x) => acc + x, 0);
const averageDevSalary = totalDevSalary / developerSalaries.length;

console.log(averageDevSalary);

const nonDevelopers = employees.filter(
  (employee) => employee.jobTitle !== 'developer'
);

const nonDevSal = nonDevelopers.map((nonDev) => nonDev.salary);
const totalNonDevSal = nonDevSal.reduce((acc, x) => acc + x, 0);
const averageNonDevSalary = totalNonDevSal / nonDevSal.length;

console.log(averageNonDevSalary);
