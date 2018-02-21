let result;

const KaprekarsConstant = (num) => {
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
result = KaprekarsConstant(2111);

console.log(result);