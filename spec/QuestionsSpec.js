describe('Javascript refresher', function() {
  var n;
  var m;

  it('selectElementsStartingWithA', function() {
    n = ['bananas', 'apples', 'pears', 'avocados'];
    expect(selectElementsStartingWithA(n)).toEqual(['apples', 'avocados']);
  });

  it('selectElemetsStartingWithVowel', function() {
    n = ['john', 'david', 'omar', 'fred', 'idris', 'angela'];
    expect(selectElemetsStartingWithVowel(n)).toEqual(['omar', 'idris', 'angela']);
  });

  it('removeNilsFromArray', function() {
    n = ['a', 'b', nil, nil, false, 'c', nil];
    expect(removeNilsFromArray(n)).toEqual(['a', 'b', false, 'c']);
  });

  it('removeNilsAndFalseFromArray', function() {
    n = ['a', 'b', nil, nil, false, 'c', nil];
    expect(removeNilsAndFalseFromArray(n)).toEqual(['a', 'b', 'c']);
  });

  it('reverseEveryElementInArray', function() {
    n = ['dog', 'monkey', 'elephant'];
    expect(reverseEveryElementInArray(n)).toEqual(['god', 'yeknom', 'tnahpele']);
  });

  it('everyPossiblePairingOfStudents', function() {
    n = ['Bob', 'Dave', 'Clive'];
    expect(everyPossiblePairingOfStudents(n)).toEqual([['Bob', 'Clive'], ['Bob', 'Dave'], ['Clive', 'Dave']]);
  });

  it('allElementsExceptFirstThree', function() {
    n = [1, 2, 3, 4, 5, 6, 7];
    expect(allElementsExceptFirstThree(n)).toEqual([4, 5, 6, 7]);
  });

  it('addElementToBeginningOfArray', function() {
    n = [2, 3, 4, 5];
    expect(addElementToBeginningOfArray(n,1)).toEqual([1, 2, 3, 4, 5]);
  });

  it('arraySortByLastLetterOfWord', function() {
    n = ['sky', 'puma', 'maker'];
    expect(arraySortByLastLetterOfWord(n)).toEqual(['puma', 'maker', 'sky']);
  });

  it('getFirstHalfOfString', function() {
    n = 'banana';
    m = 'apple';
    expect(getFirstHalfOfString(n)).toEqual('ban');
    expect(getFirstHalfOfString(m)).toEqual('app');
  });

  it('makeNumbersNegative', function() {
    n = 5;
    m = -7;
    expect(makeNumbersNegative(n)).toEqual(-5);
    expect(makeNumbersNegative(m)).toEqual(-7);
  });

  it('separateArrayIntoEvenAndOddNumbers', function() {
    n = [1, 2, 3, 4, 5, 6, 7];
    expect(separateArrayIntoEvenAndOddNumbers(n)).toEqual([[2, 4, 6], [1, 3, 5, 7]]);
  });

  it('numberofElementsThatArePalindromes', function() {
    n = ['bob', 'radar', 'alex', 'noon', 'banana'];
    expect(numberofElementsThatArePalindromes(n)).toEqual(3);
  });

  it('shortestWordInarray', function() {
    n = ['here', 'is', 'a', 'bunch', 'of', 'words', 'of', 'different', 'lengths'];
    expect(shortestWordInarray(n)).toEqual('a');
  });

  it('longestWordInArray', function() {
    n = ['here', 'is', 'a', 'bunch', 'of', 'words', 'of', 'different', 'lengths'];
    expect(longestWordInArray(n)).toEqual('different');
  });

  it('totalOfArray', function() {
    n = [1, 3, 5, 6, 2, 8];
    expect(totalOfArray(n)).toEqual(25);
  });

  it('doubleArray', function() {
    n = [1, 2, 3];
    expect(doubleArray(n)).toEqual([1, 2, 3, 1, 2, 3]);
  });

  it('averageOfArray', function() {
    n = [10, 15, 25];
    expect(averageOfArray(n)).toEqual(17);
  });

  it('getElementsUntilGreaterThanFive', function() {
    n = [1, 3, 5, 4, 1, 2, 6, 2, 1, 3, 7];
    expect(getElementsUntilGreaterThanFive(n)).toEqual([1, 3, 5, 4, 1, 2]);
  });

  it('convertArrayToAObject', function() {
    n = ['a', 'b', 'c', 'd'];
    expect(convertArrayToAObject(n)).toEqual({'a':'b','c':'d'});
  });

  it('getAllLettersInArrayOfWords', function() {
    n = ['cat', 'dog', 'fish'];
    expect(getAllLettersInArrayOfWords(n)).toEqual(['a', 'c', 'd', 'f', 'g', 'h', 'i', 'o', 's', 't']);
  });

  it('removeCapitalLettersFromString', function() {
    n = 'hello JohnDoe';
    expect(removeCapitalLettersFromString(n)).toEqual('ello ohnoe');
  });

  it('roundUpNumber', function() {
    n = 3.142;
    expect(roundUpNumber(n)).toEqual(4);
  });

  it('roundDownNumber', function() {
    n = 4.9;
    expect(roundDownNumber(n)).toEqual(4);
  });

  it('formatDateNicely', function() {

  });

  it('getDomainNameFromEmailAddress', function() {
    n  = 'alex@makersacademy.com';
    expect(getDomainNameFromEmailAddress(n)).toEqual('makersacademy');
  });

  it('titleizeAString', function() {
    n = 'the lion the witch and the wardrobe';
    expect(titleizeAString(n)).toEqual('The Lion the Witch and the Wardrobe');
  });

  it('checkAStringForSpecialCharacters', function() {
    n = 'ABCdef123';
    m = 'ABC@def123';
    expect(checkAStringForSpecialCharacters(n)).toBe(false);
    expect(checkAStringForSpecialCharacters(m)).toBe(true);
  });

});