const sayHello = (name) => console.log(`hello ${name}`);

const sayHello2 = sayHello;
sayHello2('Matty');

// Ternary operations
const myFunc = true
  ? () => console.log('First option..')
  : () => console.log('Second option..');

const DEVELOPMENT = true;

const fetchDataReal = () => {
  // time-intensive operations here!
};

const fetchDataFake = () => ({
  name: 'John',
  age: 43,
});

// used at runtime? ternary condition
const fetchData = DEVELOPMENT ? fetchDataFake : fetchDataReal;
