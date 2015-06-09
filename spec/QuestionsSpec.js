describe('Javascript refresher', function() {
  var n;
  var m;

  it('selectElementsStartingWithA', function() {
    n = ['bananas', 'apples', 'pears', 'avocados'];
    expect(selectElementsStartingWithA(n)).toEqual(['apples', 'avocados']);
  });

  xit('selectElemetsStartingWithVowel', function() {
    n = ['john', 'david', 'omar', 'fred', 'idris', 'angela'];
    expect(selectElemetsStartingWithVowel(n)).toEqual(['omar', 'idris', 'angela']);
  });

  xit('removeNilsFromArray', function() {
    n = ['a', 'b', nil, nil, false, 'c', nil];
    expect(removeNilsFromArray(n)).toEqual(['a', 'b', false, 'c']);
  });

  xit('removeNilsAndFalseFromArray', function() {
    n = ['a', 'b', nil, nil, false, 'c', nil];
    expect(removeNilsAndFalseFromArray(n)).toEqual(['a', 'b', 'c']);
  });

  xit('reverseEveryElementInArray', function() {
    n = ['dog', 'monkey', 'elephant'];
    expect(reverseEveryElementInArray(n)).toEqual(['god', 'yeknom', 'tnahpele']);
  });

  xit('everyPossiblePairingOfStudents', function() {
    n = ['Bob', 'Dave', 'Clive'];
    expect(everyPossiblePairingOfStudents(n)).toEqual([['Bob', 'Clive'], ['Bob', 'Dave'], ['Clive', 'Dave']]);
  });

  xit('allElementsExceptFirstThree', function() {
    n = [1, 2, 3, 4, 5, 6, 7];
    expect(allElementsExceptFirstThree(n)).toEqual([4, 5, 6, 7]);
  });

  xit('addElementToBeginningOfArray', function() {
    n = [2, 3, 4, 5];
    expect(addElementToBeginningOfArray(n,1)).toEqual([1, 2, 3, 4, 5]);
  });

  xit('arraySortByLastLetterOfWord', function() {
    n = ['sky', 'puma', 'maker'];
    expect(arraySortByLastLetterOfWord(n)).toEqual(['puma', 'maker', 'sky']);
  });

  xit('getFirstHalfOfString', function() {
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

  xit('separateArrayIntoEvenAndOddNumbers', function() {
    n = [1, 2, 3, 4, 5, 6, 7];
    expect(separateArrayIntoEvenAndOddNumbers(n)).toEqual([[2, 4, 6], [1, 3, 5, 7]]);
  });

  xit('numberofElementsThatArePalindromes', function() {
    n = ['bob', 'radar', 'alex', 'noon', 'banana'];
    expect(numberofElementsThatArePalindromes(n)).toEqual(3);
  });

  xit('shortestWordInarray', function() {
    n = ['here', 'is', 'a', 'bunch', 'of', 'words', 'of', 'different', 'lengths'];
    expect(shortestWordInarray(n)).toEqual('a');
  });

  xit('longestWordInArray', function() {
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

  xit('averageOfArray', function() {
    n = [10, 15, 25];
    expect(averageOfArray(n)).toEqual(17);
  });

  xit('getElementsUntilGreaterThanFive', function() {
    n = [1, 3, 5, 4, 1, 2, 6, 2, 1, 3, 7];
    expect(getElementsUntilGreaterThanFive(n)).toEqual([1, 3, 5, 4, 1, 2]);
  });

  xit('convertArrayToAObject', function() {
    n = ['a', 'b', 'c', 'd'];
    expect(convertArrayToAObject(n)).toEqual({'a':'b','c':'d'});
  });

  xit('getAllLettersInArrayOfWords', function() {
    n = ['cat', 'dog', 'fish'];
    expect(getAllLettersInArrayOfWords(n)).toEqual(['a', 'c', 'd', 'f', 'g', 'h', 'i', 'o', 's', 't']);
  });

  xit('removeCapitalLettersFromString', function() {
    n = 'hello JohnDoe';
    expect(removeCapitalLettersFromString(n)).toEqual('ello ohnoe');
  });

  xit('roundUpNumber', function() {
    n = 3.142;
    expect(roundUpNumber(n)).toEqual(4);
  });

  xit('roundDownNumber', function() {
    n = 4.9;
    expect(roundDownNumber(n)).toEqual(4);
  });

  xit('formatDateNicely', function() {

  });

  xit('getDomainNameFromEmailAddress', function() {
    n  = 'alex@makersacademy.com';
    expect(getDomainNameFromEmailAddress(n)).toEqual('makersacademy');
  });

  xit('titleizeAString', function() {
    n = 'the lion the witch and the wardrobe';
    expect(titleizeAString(n)).toEqual('The Lion the Witch and the Wardrobe');
  });

  xit('checkAStringForSpecialCharacters', function() {
    n = 'ABCdef123';
    m = 'ABC@def123';
    expect(checkAStringForSpecialCharacters(n)).toBe(false);
    expect(checkAStringForSpecialCharacters(m)).toBe(true);
  });

});