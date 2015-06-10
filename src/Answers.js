selectElementsStartingWithA = function(array) {
  filterByFirstLetter = function (element){
   if (element.toLowerCase().indexOf('a') === 0)
    {return element;}
  };
  return array.filter(filterByFirstLetter);
};

selectElemetsStartingWithVowel = function() {

};

removeNullsFromArray = function(array) {
  console.log(0.1 + 0.2);
  console.log(0.1 + 0.2 == 0.3);
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

numberofElementsThatArePalindromes = function(array) {
  isPalindrome = function(string) {
    return (string == string.split('').reverse().join(''));
  };
  result = array.filter(isPalindrome);
  return result.length;
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

doubleArray = function(array) {
  var output = [];
  var j = 0;
  while (j<2) {
    for (var i = 0; i < array.length; i++) {
      output.push(array[i]);
    }
    j++;
  }
  return output;
};

averageOfArray = function(array) {
  var total = totalOfArray(array);
  answer = total/(array.length);
  return Math.ceil(answer);
};

getElementsUntilGreaterThanFive = function() {

};

convertArrayToAObject = function() {

};

getAllLettersInArrayOfWords = function() {

};

removeCapitalLettersFromString = function() {

};

roundUpNumber = function(number) {
  return Math.ceil(number);
};

roundDownNumber = function(number) {
  return Math.floor(number);
};

getDomainNameFromEmailAddress = function() {

};

titleizeAString = function() {

};

checkAStringForSpecialCharacters = function() {

};