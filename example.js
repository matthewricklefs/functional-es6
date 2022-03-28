// Closure
const createPrinter = () => {
  const myFavNum = 42;

  return () => console.log(`My favorite number is ${myFavNum}`);
};

const printer = createPrinter();
printer();

// we have access to the constant inside of the createPrinter function..
// IE access to the scope the constant was returned from

// implement real private variables in Javascript
// object destructuring
const Person = ({ name, age, job }) => {
  var _name = name;
  var _age = age;
  var _job = job;

  // getter functions
  return {
    getName: () => _name,
    getAge: () => _age,
    getJob: () => _job,

    setJob: (newJob) => (_job = newJob),
  };
};

const me = Person({ name: 'Matthew', age: '34', job: 'Developer' });

me.getName();
me.getAge();
me.getJob();

console.log(me.getName());
console.log(me.getAge());
console.log(me.getJob());

me._name; // -> undefined..

me.setJob('Mid-Level Developer');
console.log(me.getJob());
