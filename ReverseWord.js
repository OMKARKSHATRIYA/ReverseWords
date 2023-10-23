function reverseWordsInSentence(sentence) {
    if (typeof sentence !== 'string') {
      return sentence;
    }
  
    let reversedSentence = '';
    let word = '';
    
    for (let i = 0; i < sentence.length; i++) {
      const char = sentence[i];
      
      if (char === ' ' || i === sentence.length - 1) {
        if (i === sentence.length - 1) {
          word += char;
        }
        
        let reversedWord = '';
        for (let j = word.length - 1; j >= 0; j--) {
          reversedWord += word[j];
        }
        
        reversedSentence += reversedWord;
        
        if (i !== sentence.length - 1) {
          reversedSentence += ' ';
        }
        
        word = '';
      } else {
        word += char;
      }
    }
    
    return reversedSentence;
  }
  
  const input = "This is a sunny day";
  const reversedSentence = reverseWordsInSentence(input);
  console.log(reversedSentence);
  
  