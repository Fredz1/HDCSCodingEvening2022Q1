// import translations
const alphabet = require('./letterCode.json')


const letter = morseLetter => {
  for(let [key, value] of Object.entries(alphabet)){
    if(value === morseLetter){
      return key
    }
  }
}

const wholeMorseWord = word => {
  const splitWord = word.split(' ')
  
  const decodedWord = splitWord.map(
    el => letter(el)
  )
  return decodedWord.join('')
}

const morseSentence = word => {
  const splited = word.split(' / ')
  const decodedArr = splited.map(
    el => wholeMorseWord(el)    
  )
  return decodedArr.join(' ')
}




// console.log(letter("-.-.--"))
// wholeMorseWord("-.-.-- .-..-.")
// splitByWord(".... . .-.. .-.. --- / .-- --- .-. .-.. -..")

module.exports = {morseSentence}