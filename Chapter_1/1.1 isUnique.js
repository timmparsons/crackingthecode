//Is Unique: Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?

function isUnique(str) {
  for(let i = 0; i < str.length; i++ ) {
    for(let j = i + 1; j < str.length; j++) {
      if(str[i] === str[j]) {
        return false;
      }
    }
  }
  return true;
}

console.log(isUnique('abcd'), 'true');
console.log(isUnique('abccd'), 'false');
console.log(isUnique('bhjjb'), 'false');
console.log(isUnique('mdjq'), 'true');

//O(n^2) time complexity