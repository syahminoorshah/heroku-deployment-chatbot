var natural = require ('natural');

//Tokenization

var tokenizer  = new natural.WordTokenizer();
console.log(tokenizer.tokenize("testing 1 2 3"));