describe('Javascript refresher', function() {
  var n;

  it('selectElementsStartingWithA', function() {
    n = ['bananas', 'apples', 'pears', 'avocados'];
    expect(selectElementsStartingWithA(n)).toEqual(['apples', 'avocados']);
  });
});