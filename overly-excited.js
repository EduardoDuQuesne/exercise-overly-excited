// Create an array that contains the words in the sentence
var sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];
var displaySentence = "";
var theWordArray = "";

// The addExcitement function should accept the array as the sole argument
function addExcitement(theWordArray) {
    for (var i = 0; i < sentence.length; i++) {
        theWordArray = theWordArray + " " + sentence[i];
        if ((i + 1) % 3 === 0) {
            theWordArray = theWordArray + "!";
        }
        if (i === 5 && (i + 1) % 3 === 0) {
            theWordArray = theWordArray + "!";
        }
        if (i === 8 && (i + 1) % 3 === 0) {
            theWordArray = theWordArray + "!!";
        }
        if (i === 11 && (i + 1) % 3 === 0) {
            theWordArray = theWordArray + "!!!";
        }
        console.log(theWordArray); 
    }
}
    /*
      Write a `for` loop that iterates over the array argument and
      outputs the words.
     */


// Invoke the function and pass in the array
addExcitement(theWordArray);
