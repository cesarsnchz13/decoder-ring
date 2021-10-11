// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {

const standard = "abcdefghijklmnopqrstuvwxyz"

  function substitution(input, alphabet, encode = true) {
    let message = []
    let lowerCased = input.toLowerCase()

//CHECK FOR ERRORS
    // if there is no substitute alphabet or there aren't 26 characters
    if(!alphabet || alphabet.length !== 26) return false
    // if there are repeated characters in the substitute alphabet
    for(let i=0;i<alphabet.length;i++){
      for(let j=i+1; j<alphabet.length;j++){
        if(alphabet[i] === alphabet[j]) return false
      }
    }

//DECODING THE MESSAGE
    if(!encode){
      for(let i=0; i < lowerCased.length; i++){
        let thisCharacter = lowerCased[i]
        if(thisCharacter === " ") message.push(thisCharacter)
        for(let j=0; j< alphabet.length;j++){
          const standardLetter = standard[j]
          const subLetter = alphabet[j]
          if(thisCharacter === subLetter) message.push(standardLetter)
        }
      } return message.join("")
    }

// ENCODING THE MESSAGE
    for(let i=0; i < lowerCased.length; i++){
      let thisCharacter = lowerCased[i]
      if(thisCharacter === " ") message.push(thisCharacter)
      for(let j=0; j< standard.length;j++){
        const standardLetter = standard[j]
        const subLetter = alphabet[j]
        if(thisCharacter === standardLetter) message.push(subLetter)
      }
    } return message.join("")
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
