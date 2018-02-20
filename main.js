let result;

const FirstFactorial = num => {
  return [...Array(num).keys()]
    .reverse()
    .reduce((factorial, int) => {
      int++
      if (int !== 0 && int !== 1) {
        factorial *= int
      }
      return factorial;
    }, 1); 
};
result = FirstFactorial(8);

const LetterChanges = str => { 
  return str
    .split('')
    .map(letter => (letter.charCodeAt(0) > 91 && letter.charCodeAt(0) < 123)
      ? String.fromCharCode(letter.charCodeAt(0) + 1)
      : letter)
    .map(letter => letter.match('a|e|i|o|u') ? letter.toUpperCase() : letter)
    .join('');
}
result = LetterChanges('sentence');

const SimpleAdding = num => { 
  return [...Array(num).keys()].reduce((sum, el) => {
    return sum += (el + 1)
  }, 0)     
}
result = SimpleAdding(5);

const LetterCapitalize = str => { 
  return str.split(' ')
    .map(word => word[0].toUpperCase() + word.slice(1, word.length))
    .join(' ');
}
result = LetterCapitalize('hello world');

console.log(result);