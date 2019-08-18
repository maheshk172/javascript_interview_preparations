/**
 * @param {string} digits
 * @return {string[]}
 */

var numberToLetters = {
  2: ['a', 'b', 'c'],
  3: ['d', 'e', 'f'],
  4: ['g', 'h', 'i'],
  5: ['j', 'k', 'l'],
  6: ['m', 'n', 'o'],
  7: ['p', 'q', 'r', 's'],
  8: ['t', 'u', 'v'],
  9: ['w', 'x', 'y', 'z']
};

var letterCombinations = function(digits) {
  var length = digits.length;

  // 23 . => [2,3]
  var charArray = [];
  for (var i = 0; i < length; i++) {
    charArray.push(numberToLetters[digits.charAt(i)]);
    //charArray.push(digits.charAt(i));
  }
  //console.log(charArray);
  var results = [];
  if (charArray.length === 0) {
    return results;
  }

  results = cartesianProduct(charArray).map(function(a) {
    return a.join('');
  });
  return results;
};

function cartesianProduct(arr) {
  return arr.reduce(
    function(a, b) {
      //console.log('a:', a);
      //console.log('b:', b);
      return a
        .map(function(x) {
          //console.log('x: ', x);
          return b.map(function(y) {
            //console.log('y: ', y);
            return x.concat(y);
          });
        })
        .reduce(function(a, b) {
          return a.concat(b);
        }, []);
    },
    [[]]
  );
}
console.log(letterCombinations('234'));
