// given an unsorted array of n elements,
// find if the element k is present in the array or not
// must return string yes or no

let array = [2, 3, 1];
let kay = 5;

function findNumber(arr, k) {
  // Write your code here
  let length = arr.length;

  if (k === null) return;
  if (length === 0) return;

  for (let i = 0; i < length; i++) {
    if (arr.includes(k)) {
      return 'YES';
    }
  }

  return 'NO';
}

findNumber(array, kay);
