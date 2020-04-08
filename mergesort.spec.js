/* global split */
/* global merge */

const mergeFunc = { split, merge };


describe('Split Array function', function() {
  it("handles an empty array", function () {
    expect(mergeFunc.split([])).toEqual([[]]);
  });

  it("handles an array with 1 item", function () {
    const array = [5];
    expect(mergeFunc.split(array)).toEqual([[5]]);
  });

  it('is able to split an array into two halves', function() {
    expect(mergeFunc.split([7,3,4,1,6])).toEqual([[7, 3],[4, 1, 6]]);
    expect(mergeFunc.split([9,2,8,1,5,0])).toEqual([[9, 2, 8],[1, 5, 0]]);
  });
});

describe('Merge function', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    // test the merging algorithm
    expect(mergeFunc.merge([1, 3],[4, 6, 7])).toEqual([[1, 3, 4, 6, 7]])
    expect(mergeFunc.merge([0, 1, 2],[5, 8, 9])).toEqual([[0, 1, 2, 5, 8, 9]])
    expect(mergeFunc.merge([3, 5, 6],[2, 8, 9])).toEqual([[2, 3, 5, 6, 8, 9]])
  });
});