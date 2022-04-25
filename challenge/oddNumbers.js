// given two integers, l and r
// print all odd numbers between l and r (including l and r)
// must return an array of integers denoting the odd numbers between l and r

function oddNumbers(l, r) {
  const arr = [];

  while (l <= r) {
    arr.push(l);
    l += 1;
  }

  return arr.filter((n) => n % 2);
}

oddNumbers(3, 6);
