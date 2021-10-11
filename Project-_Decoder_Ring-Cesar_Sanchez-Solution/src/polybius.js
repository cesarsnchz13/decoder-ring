// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

//create an object with all of the letters coded
  const polyGrid =
    {"a":"11", "b":"21", "c":"31","d":"41","e":"51","f":"12","g":"22","h":"32","i":"42","j":"42","k":"52","l":"13","m":"23","n":"33","o":"43","p":"53","q":"14","r":"24","s":"34","t":"44","u":"54","v":"15","w":"25","x":"35","y":"45","z":"55"}

  function polybius(input, encode = true) {
    // your solution code here
    let result = []
    const lowerCased = input.toLowerCase()
    const numbersOnly = input.split(" ").join("")
// RETURN FALSE IF AMOUNT OF NUMBERS IS ODD
    if(!encode && numbersOnly.length % 2 !== 0) return false
//DECODING A MESSAGE
    if(!encode){
      const code = input.split(" ") // ex: "ab bc" = [1121, 2131]
      for(let i=0; i < code.length; i++){
        let separated = code[i].match(/.{1,2}/g) 
        let decodedWord = []
        for(let j=0; j< separated.length; j++) {
          const thisNumber = separated[j]
          for(let letter in polyGrid){
            const thisLetter = Object.values(letter)
            if(thisNumber == polyGrid[letter]){
              decodedWord.push(thisLetter)
            }
          } 
        } //push new word into result array.
        result.push(decodedWord.join(''))
      } //join words, separated by a space
      return result.join(" ")
    }

    //ENCODING A MESSAGE
  
    for(let i=0; i< lowerCased.length; i++){
      let thisCharacter = lowerCased[i]
    if(thisCharacter == " ") result.push(thisCharacter)
      for(let letter in polyGrid){
        const thisLetter = Object.values(letter)
        if(thisCharacter == thisLetter){
          result.push(polyGrid[letter])
        }         
      } 
      } 
      return result.join("")
    } 
  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
