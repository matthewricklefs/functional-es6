const a = 'ada';
const b = 'ana';

const isAnagram = (str) => {
  for (let i = 0; i < str.length; i++) {
    console.log(str[i]);

    for (j = 0; j < str.length; j--) {
      console.log(str[j]);
    }
  }

  return str;
};

console.log(isAnagram(a));
