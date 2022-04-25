// implement a function which given an array of integers
// returns a new array for which every index carries the value
// of the product of the remaining elements;

function findSpecialProduct(n) {
  let leftProduct = [];
  let rightProduct = [];
  let output = n.length;

  for (let i = 0; i < n.length; i++) {
    leftProduct[i] = n[i] * leftProduct[i - 1];
  }

  for (let i = n.length - 1; i >= 0; i--) {
    rightProduct[i] = n[i] * rightProduct[i + 1];
  }

  for (let i = 0; i < n.length; i++) {
    output[i] = leftProduct[i - 1] * rightProduct[i + 1];
  }

  return output;
}

console.log(findSpecialProduct([1, 2, 3, 4]));
