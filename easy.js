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
      : letter
    )
    .map(letter => letter.match('a|e|i|o|u')
      ? letter.toUpperCase()
      : letter
    )
    .join('');
}
result = LetterChanges('sentence');

const SimpleAdding = num => { 
  return [...Array(num).keys()]
    .reduce((sum, el) => {
      return sum += (el + 1)
    }, 0);
}
result = SimpleAdding(5);

const LetterCapitalize = str => { 
  return str
    .split(' ')
    .map(word => word[0].toUpperCase() + word.slice(1, word.length))
    .join(' ');
}
result = LetterCapitalize('hello world');

const SimpleSymbols = str => {
  if (str.charCodeAt(0) > 92 && str.charCodeAt(0) < 133)
    return false;
  if (str.charCodeAt(str.length - 1) > 92 && str.charCodeAt(str.length - 1) < 133)
    return false;
  return str
    .split('+')
    .reduce((bool, char) => {
      if (char.length > 1) {
        char.split('')
          .forEach(letter => {
            if (letter.charCodeAt(0) > 92 && letter.charCodeAt(0) < 133) {
              bool = false;
            }
          })
      }
      return bool;
    }, true)
}
result = SimpleSymbols("F+f+d+f");

const CheckNums = (num1, num2) => {
  return num1 === num2 
    ? "-1" 
    : num1 < num2 
      ? true 
      : false;
}
result = CheckNums(100, 1);

const TimeConvert = (num) => {
  return Math.floor(num / 60) < 1 
    ? `0:${num}`
    : `${Math.floor(num / 60)}:${num % 60}`;
};
result = TimeConvert(372);

const AlphabetSoup = (str) => {
  return str
    .split('')
    .map(letter => letter.charCodeAt(0))
    .sort((a,b) => a - b)
    .map(char => String.fromCharCode(char))
    .join('');
}
result = AlphabetSoup('coderbyte');

console.log(result);