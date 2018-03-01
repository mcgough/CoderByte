let result;

const sumAll = (arr) => {
  const high = arr.reduce((a, b) => Math.max(a,b));
  let low = arr.reduce((a, b) => Math.min(a,b));
  let result = 0;
  for (low; low <= high; low++) {
    result += low;
  }
  return result;
};
result = sumAll([5, 10]);

const diffArray = (arr1, arr2) => {
  return [
    ...arr1.filter(i => arr2.indexOf(i) === -1),
    ...arr2.filter(i => arr1.indexOf(i) === -1)
  ];
}
result = diffArray([1, 2, 3, 6, 10, 20, 55], [0, 1, 20, 3, 4, 5, 6]);

console.log(result);