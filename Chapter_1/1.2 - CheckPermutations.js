function checkPermu(str1, str2) {
  //if different lengths return false
  if(str1.length !== str2.length) return false;

  //turn string into array, sort them and turn back into string
 let newString1 = str1.split('').sort().join('');
 let newString2 = str2.split('').sort().join('');
 
  //if the string are equal return true or false
	return newString1 == newString2;
}


// Tests
console.log(checkPermu('abcdef', 'abcdef'), true)
console.log(checkPermu('abcdef', 'acdfeb'), true)
console.log(checkPermu('abcdef', 'eeeeee'), false)