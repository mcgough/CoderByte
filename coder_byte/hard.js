let result;

const KaprekarsConstant = num => {
  const fixed = 6174;
  let str, sum = num, count = 0;
  while (sum !== fixed) {
    str = sum.toString().split('');
    if (str.length < 4) {
      str = [
        ...str,
        ...[
          ...Array(4 - str.length).keys()
        ].map(i => '0')
      ];
    }
    count++;
    sum = str.sort((a,b) => b - a).join('') - str.sort((a,b) => a - b).join('') 
  }
  return count;
};
result = KaprekarsConstant(8917);

// NOPE. NOT CORRECT
const ChessboardTraveling = str => {
  const arr = str
    .split('')
    .filter(i => i !== ')' && i !== '(')
    .map(i => parseInt(i));
  const [start, end] = [arr.splice(0, 2), arr];
  return start
    .reduce((count, i, index) => count += (end[index] - i), 0);
}
result = ChessboardTraveling('(11)(46)'); 

console.log(result);