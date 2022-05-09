/* eslint-disable immutable/no-mutation */
/* eslint-disable no-plusplus */
const matrix = (n) => {
  // Set the empty array
  const results = [];

  // starting our first loop
  // for each iteration we are going to loop as long as is
  // less than n we are going to push an empty sub array into results

  for (let i = 0; i < n; i++) {
    results.push([]);
  }

  // setting our starting variables
  let counter = 1; // what number we are pushing in
  let startCol = 0; // keep track of start column
  let endCol = n - 1; // keep track of last index
  let startRow = 0; // keep track of start row
  let endRow = n - 1; // keep track of last index

  while (startCol <= endCol && startRow <= endRow) {
    // top row
    for (let i = startCol; i <= endCol; i++) {
      results[startRow][i] = counter;
      counter++;
    }
    startRow++; // once the loop finishes go down a row

    // right col
    for (let i = startRow; i <= endRow; i++) {
      results[i][endCol] = counter;
      counter++;
    }
    endCol--; // start moving from right to left at this point so decrement this

    // bottom row
    for (let i = endCol; i >= startCol; i--) {
      results[endRow][i] = counter;
      counter++;
    }
    endRow--; // again moving from right to left

    // start col
    for (let i = endRow; i >= startRow; i--) {
      results[i][startCol] = counter;
      counter++;
    }
    startCol++;
  }

  return results;
};

console.log(matrix(5));
