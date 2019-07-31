function insertLetters(str, length) {
	let newString = str.trim(str).split('')
  for(let i = 0; i < newString.length; i++) {
  	if(newString[i] === ' ') {
    	newString[i] = '%20'
    }
  }
  return newString.join('')
}

//Test
insertLetters('ab cd ef    ', 8);
insertLetters('abc ef', 7);