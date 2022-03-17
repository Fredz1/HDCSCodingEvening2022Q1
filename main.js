// import files
const {sentence} = require('./code.js')
const {morseSentence} = require('./decode.js')

// get decode or decode
const prompt = require("prompt-sync")({ sigint: true })

const option = prompt(
  `Would like to, 1) Encode or 2) Decode or 3) Exit`
)


if (option == 1){
  const word = prompt(`Enter the word you would like to code:`)
  console.log(sentence(word))
}
if (option == 2){
  const word = prompt(`Enter the word you would like to code:`)
  console.log(morseSentence(word))
}
if(option == 3){
  console.log('Thank you for playing')
}
if(option >= 4 || option <= 0){
  console.log('invalid input')
}