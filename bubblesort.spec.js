/* global bubbleSort */
/* global swap */

const sortingFunc = { swap, bubbleSort }

describe('Bubble Sort', function(){

  beforeAll(function () {
    spyOn(sortingFunc, 'swap').and.callThrough();
  });

  it('handles an empty array', function(){
    expect( sortingFunc.bubbleSort([]) ).toEqual( [] );
  });

  it('handles an array with 1 item', function(){
    expect( sortingFunc.bubbleSort([5]) ).toEqual( [5] );
  });

  it('handles an array with multiple items', function(){
    expect( sortingFunc.bubbleSort([5,2,3,6,4,9,1]) ).toEqual( [1,2,3,4,5,6,9] );
  });

  it('return the number of swaps required to sort an array', function () {
    sortingFunc.bubbleSort([2,60,24,13]);
    expect(sortingFunc.swap.calls.count()).toEqual(7);
  });

});