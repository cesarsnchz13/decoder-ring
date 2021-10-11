// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // your solution code here
    let result = []
    let lowerCase = input.toLowerCase()

    //exit early if shit meets any of these conditions
    if (shift === 0 || shift > 25 || shift < -25) return false
    if (!encode) shift *= -1
    
    for(let i=0; i < lowerCase.length; i++){
      //define variables
      let ThisCharacter = lowerCase[i]
      let ThisCharactersCode = lowerCase.charCodeAt([i])
      let newLetter = String.fromCharCode(ThisCharactersCode + shift)
      let endAlphabet = (ThisCharactersCode - 26) + shift
      let beforeAlphabet = (ThisCharactersCode + 26) + shift
      //create conditionals
      //if this character is not a letter
      if(ThisCharactersCode > 31 && ThisCharactersCode < 64) {
        result.push(ThisCharacter)
        //if the shift goes past letter "z"
      } else if((ThisCharactersCode + shift) > 122){
        result.push(String.fromCharCode(endAlphabet))
        //if the negative shift goes before "a"
      } else if((ThisCharactersCode + shift) < 97) {
        result.push(String.fromCharCode(beforeAlphabet))
        //if the shift doesn't go past the end
      } else result.push(newLetter)
    } return result.join("")
  } 
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
