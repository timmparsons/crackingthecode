//Check Permutation: Given two strings, write a method to decide if one is a permutation of the other.

function checkPermutations(str1, str2){
  let newStr = str1.length == str2.length ? true : false
  if(newStr) {
    return str1.split('').sort().join('') == str2.split('').sort().join('')
  }
	return false;
}

console.log(checkPermutations('hello', 'lehlo'), 'true')
console.log(checkPermutations('noooo', 'yesssss'), 'false')
console.log(checkPermutations('hi', 'ih'), 'true')
console.log(checkPermutations('hiiii', 'hiiii'), 'true')

