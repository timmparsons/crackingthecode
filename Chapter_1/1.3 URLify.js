/* URLify: Write a method to replace all spaces in a string with '%20'. 
You may assume that the string has sufficient space at the end to hold the additional characters, 
and that you are given the "true" length of the string. */


function urlify(string) {
  let stringToArray = string.trim().split('');
    for(let i in stringToArray) {
        if(stringToArray[i] == ' ') {
            stringToArray[i] = '%20'
        }
    }
    return stringToArray.join('')
}

console.log(urlify('Mr John Smith   '))
console.log(urlify('MrJohn Smith'))