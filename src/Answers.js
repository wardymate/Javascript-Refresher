selectElementsStartingWithA = function(array) {
  filterByFirstLetter = function (element){
   if (element.toLowerCase().indexOf('a') === 0)
    {return element;}
  };
  return array.filter(filterByFirstLetter);
};

selectElemetsStartingWithVowel = function() {

};

removeNilsFromArray = function(array) {

};

removeNilsAndFalseFromArray = function() {

};



reverseEveryElementInArray = function (array) {
  for (var i = 0; i < array.length; i++) {
    var items = array[i].split('').reverse();
    console.log(items)   ;
  }
};

everyPossiblePairingOfStudents = function() {

};

allElementsExceptFirstThree = function() {

};

addElementToBeginningOfArray = function() {

};

arraySortByLastLetterOfWord = function() {

};

getFirstHalfOfString = function() {

};

makeNumbersNegative = function(number) {
  if (number > 0) {
    return number*-1;
  } else {
    return number;
  }
};

separateArrayIntoEvenAndOddNumbers = function() {

};

numberofElementsThatArePalindromes = function() {

};

shortestWordInarray = function() {

};

longestWordInArray = function() {

};

totalOfArray = function(array) {
  return array.reduce(function(a,b) {
    return a + b;
  });
};

doubleArray = function() {

};

averageOfArray = function() {

};

getElementsUntilGreaterThanFive = function() {

};

convertArrayToAObject = function() {

};

getAllLettersInArrayOfWords = function() {

};

removeCapitalLettersFromString = function() {

};

roundUpNumber = function() {

};

roundDownNumber = function() {

};

getDomainNameFromEmailAddress = function() {

};

titleizeAString = function() {

};

checkAStringForSpecialCharacters = function() {

};