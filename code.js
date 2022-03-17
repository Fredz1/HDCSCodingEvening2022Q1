// import translations
const alphabet = require('./letterCode.json')


// only receive caps
const letterCode = letter => {
  const code = alphabet[letter]
  return code
}

const wholeWord = word => {

  const splitWord = word.toUpperCase().split('')

  const morseCode = splitWord.map(
    el => {
      return letterCode(el)
    }
  )

  return morseCode.join(' ')
}

const sentence = string => {
  const splitByWord = string.split(' ')

  const encodedSentence = splitByWord.map(
    el => {
      return wholeWord(el)
    }
  )

  return encodedSentence.join(' / ')
}

module.exports = {sentence}